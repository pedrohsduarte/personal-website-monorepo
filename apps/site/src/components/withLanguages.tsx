'use client';

import React from 'react';

import Languages from '@/components/Languages';
import { useContent } from '@/contexts/ContentContext';

const WithLanguages: React.FC = () => {
  const { languages } = useContent();

  return <Languages languages={languages} />;
};

export default WithLanguages;
