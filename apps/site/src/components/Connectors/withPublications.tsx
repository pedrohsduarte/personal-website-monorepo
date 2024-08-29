'use client';

import type { FC } from 'react';
import React from 'react';

import { useContent } from '../../contexts/ContentContext';

import Publications from '@/components/Content/Publications';

const WithEducationTimeline: FC = () => {
  const { publications } = useContent();

  return <Publications publications={publications} />;
};

export default WithEducationTimeline;
