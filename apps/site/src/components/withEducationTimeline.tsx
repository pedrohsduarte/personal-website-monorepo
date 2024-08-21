'use client';

import type { FC } from 'react';
import React from 'react';

import { useContent } from '../contexts/ContentContext';

import ExperienceTimeline from '@/components/ExperienceTimeline';

const WithEducationTimeline: FC = () => {
  const { education } = useContent();

  return <ExperienceTimeline experiences={education} />;
};

export default WithEducationTimeline;
