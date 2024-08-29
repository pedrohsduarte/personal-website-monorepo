'use client';

import type { FC } from 'react';
import React from 'react';

import Footer from '../Layouts/Footer';

import { navigationItems, useContent } from '@/contexts/ContentContext';

const WithFooter: FC = () => {
  const { name, xUrl, githubUrl, linkedInUrl, email } = useContent();

  return (
    <Footer
      personName={name}
      navItems={navigationItems}
      xUrl={xUrl}
      githubUrl={githubUrl}
      linkedInUrl={linkedInUrl}
      email={email}
    />
  );
};

export default WithFooter;
