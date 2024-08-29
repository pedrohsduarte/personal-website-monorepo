'use client';

import type { FC } from 'react';
import React from 'react';

import { useContent } from '../../contexts/ContentContext';

import ExperienceTimeline from '@/components/Content/ExperienceTimeline';

const WithProfessionalExperienceTimeline: FC = () => {
  const { professionalExperience } = useContent();

  return <ExperienceTimeline experiences={professionalExperience} />;
};

export default WithProfessionalExperienceTimeline;
