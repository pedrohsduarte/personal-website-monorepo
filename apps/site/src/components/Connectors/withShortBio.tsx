'use client';

import type { FC } from 'react';
import React from 'react';

import { ShortBio } from '../Content/ShortBio';

import { useContent } from '@/contexts/ContentContext';

const WithShortBio: FC = () => {
  const { shortBio } = useContent();

  return <ShortBio shortBio={shortBio} />;
};

export default WithShortBio;
