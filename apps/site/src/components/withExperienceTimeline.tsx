'use client';

import type { FC } from 'react';
import React from 'react';

import { useContent } from '../contexts/ContentContext';

import ExperienceTimeline from '@/components/ExperienceTimeline';

const WithExperienceTimeline: FC = () => {
  const { workExperience: experiences } = useContent();

  return <ExperienceTimeline experiences={experiences} />;
};

export default WithExperienceTimeline;
