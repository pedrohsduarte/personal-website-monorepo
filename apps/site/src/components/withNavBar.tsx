'use client';

import type { FC } from 'react';
import React from 'react';

import { useTheme } from '../contexts/ThemeContext';
import NavBar from './NavBar';

import { navigationItems } from '@/contexts/ContentContext';

const WithNavBar: FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleCurrentTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return <NavBar navItems={navigationItems} onThemeTogglerClick={toggleCurrentTheme} />;
};

export default WithNavBar;
