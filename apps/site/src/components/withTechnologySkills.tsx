'use client';

import React from 'react';

import TechnologySkills from './TechnologySkills';

import { useContent } from '@/contexts/ContentContext';

const WithTechnologySkills: React.FC = () => {
  const { technologySkills: technologySkills } = useContent();

  return <TechnologySkills skills={technologySkills} />;
};

export default WithTechnologySkills;
