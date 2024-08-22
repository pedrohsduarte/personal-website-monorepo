'use client';

import React, { FC } from 'react';
import { Laptop, MoonStar, SunDim } from 'lucide-react';

import { Theme, useTheme } from '@/contexts/ThemeContext';

const ThemeToggle: FC = () => {
  const { theme, setTheme, effectiveTheme } = useTheme();

  const cycleTheme = () => {
    const themes: Theme[] = ['dark', 'light', 'system'];
    const nextIndex = (themes.indexOf(theme) + 1) % themes.length;
    setTheme(themes[nextIndex]);
  };

  return (
    <button
      onClick={cycleTheme}
      className={`group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
         dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20`}
      aria-label='Toggle theme'
    >
      {theme === 'system' ? (
        <Laptop className='h-5 w-5' />
      ) : effectiveTheme === 'dark' ? (
        <MoonStar className='h-5 w-5' />
      ) : (
        <SunDim className='h-5 w-5' />
      )}
    </button>
  );
};

export default ThemeToggle;
