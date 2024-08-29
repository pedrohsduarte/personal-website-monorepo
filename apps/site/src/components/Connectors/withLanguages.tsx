'use client';

import React from 'react';

import Languages from '@/components/Content/Languages';
import { useContent } from '@/contexts/ContentContext';

const WithLanguages: React.FC = () => {
  const { languages } = useContent();

  return <Languages languages={languages} />;
};

export default WithLanguages;
