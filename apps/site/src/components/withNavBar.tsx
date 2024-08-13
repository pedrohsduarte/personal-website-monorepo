'use client';

import type { FC } from 'react';
import React from 'react';

import { useContent } from '../contexts/ContentContext';
import { useTheme } from '../contexts/ThemeContext';
import NavBar from './NavBar';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Articles', href: '/articles' },
  { label: 'Resume', href: '/resume' },
];

const WithNavBar: FC = () => {
  const { name } = useContent();
  const { theme, setTheme } = useTheme();

  const toggleCurrentTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return <NavBar personName={name} navItems={navItems} onThemeTogglerClick={toggleCurrentTheme} />;
};

export default WithNavBar;
