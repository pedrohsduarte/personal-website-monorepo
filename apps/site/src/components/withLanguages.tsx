'use client';

import React from 'react';

import { useContent } from '@/contexts/ContentContext';
import Languages from '@/components/Languages';

const WithLanguages: React.FC = () => {
  const { languages } = useContent();

  return <Languages languages={languages} />;
};

export default WithLanguages;
