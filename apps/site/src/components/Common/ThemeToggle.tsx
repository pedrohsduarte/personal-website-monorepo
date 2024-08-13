'use client';

import React, { FC, MouseEvent } from 'react';
import { MoonStar, SunDim } from 'lucide-react';

type ThemeToggleProps = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const ThemeToggle: FC<ThemeToggleProps> = ({ onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur
         transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20`}
      aria-label='Toggle theme'
    >
      <MoonStar className='hidden h-5 w-5 dark:block' />
      <SunDim className='block h-5 w-5 dark:hidden' />
    </button>
  );
};

export default ThemeToggle;
