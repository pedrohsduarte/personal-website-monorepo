'use client';

import type { FC } from 'react';
import React from 'react';

import { useContent } from '../../contexts/ContentContext';

import CVSummary from '@/components/Content/CVSummary';

const WithEducationTimeline: FC = () => {
  const { cvSummary } = useContent();

  return <CVSummary cvSummary={cvSummary} />;
};

export default WithEducationTimeline;
