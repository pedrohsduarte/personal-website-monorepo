'use client';

import {useEffect, useState} from 'react';
import {MoonStar, SunDim} from 'lucide-react';

import {useTheme} from '../contexts/ThemeContext';

function ThemeToggle() {
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
      }}
      className={`group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
         transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20`}
      aria-label='Toggle theme'
    >
      {theme === 'dark' ? <MoonStar className='h-5 w-5' /> : <SunDim className='h-5 w-5' />}
    </button>
  );
}

export default ThemeToggle;
