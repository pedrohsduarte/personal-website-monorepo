'use client';

import type { FC } from 'react';
import React from 'react';

import NavBar from './NavBar';

import { navigationItems } from '@/contexts/ContentContext';

const WithNavBar: FC = () => {
  return <NavBar navItems={navigationItems} />;
};

export default WithNavBar;
