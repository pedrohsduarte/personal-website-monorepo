'use client';

import type { FC } from 'react';
import React from 'react';

import { useContent } from '../../contexts/ContentContext';

import Certifications from '@/components/Content/Certifications';

const WithEducationTimeline: FC = () => {
  const { certifications } = useContent();

  return <Certifications certifications={certifications} />;
};

export default WithEducationTimeline;
