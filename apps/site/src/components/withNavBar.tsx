'use client';

import type { FC } from 'react';
import React from 'react';

import { useTheme } from '../contexts/ThemeContext';
import NavBar from './NavBar';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Resume', href: '/resume' },
];

const WithNavBar: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleCurrentTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return <NavBar navItems={navItems} onThemeTogglerClick={toggleCurrentTheme} />;
};

export default WithNavBar;
