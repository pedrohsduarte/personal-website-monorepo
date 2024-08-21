import { Metadata } from 'next';
import React from 'react';

import WithDownloadCVButton from '@/components/withDownloadCVButton';
import WithEducationTimeline from '@/components/withEducationTimeline';
import WithLanguages from '@/components/withLanguages';
import WithProfessionalExperienceTimeline from '@/components/withProfessionalExperienceTimeline';
import WithTechnicalSkills from '@/components/withTechnicalSkills';

export const metadata: Metadata = {
  title: 'Resume',
};

const Resume: React.FC = () => {
  return (
    <div className='w-full space-y-16'>
      <h1 className='text-5xl font-bold'>My Resume</h1>
      <div className='flex w-full flex-col gap-2 sm:flex-row'>
        <div className='w-full space-y-16 md:w-3/4'>
          <h2 className='text-2xl font-bold'>Education</h2>
          <WithEducationTimeline />
          <h2 className='text-2xl font-bold'>Professional Experience</h2>
          <WithProfessionalExperienceTimeline />
        </div>
        <div className='flex w-full flex-col gap-2 md:w-1/4'>
          <WithDownloadCVButton />
          <WithLanguages />
          <WithTechnicalSkills />
        </div>
      </div>
    </div>
  );
};

export default Resume;
