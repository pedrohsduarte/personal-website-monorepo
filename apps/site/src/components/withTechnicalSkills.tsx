'use client';

import React from 'react';

import TechnicalSkills from './TechnicalSkills';

import { useContent } from '@/contexts/ContentContext';

const WithTechnicalSkills: React.FC = () => {
  const { technicalSkills } = useContent();

  return <TechnicalSkills skills={technicalSkills} />;
};

export default WithTechnicalSkills;
