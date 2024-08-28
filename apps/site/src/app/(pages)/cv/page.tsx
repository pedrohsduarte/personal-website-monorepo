import { Metadata } from 'next';
import React from 'react';

import WithDownloadCVButton from '@/components/withDownloadCVButton';
import WithEducationTimeline from '@/components/withEducationTimeline';
import WithLanguages from '@/components/withLanguages';
import WithProfessionalExperienceTimeline from '@/components/withProfessionalExperienceTimeline';
import WithPublications from '@/components/withPublications';
import WithTechnologySkills from '@/components/withTechnologySkills';

export const metadata: Metadata = {
  title: 'Curriculum Vitae',
};

const CurriculumVitae: React.FC = () => {
  return (
    <div className='w-full space-y-16'>
      <h1 className='text-5xl font-bold'>Curriculum Vitae</h1>
      <div className='flex w-full flex-col gap-10 sm:flex-row'>
        <div className='w-full space-y-16 md:w-[70%]'>
          <h2 className='text-2xl font-bold'>Education</h2>
          <WithEducationTimeline />
          <h2 className='text-2xl font-bold'>Professional Experience</h2>
          <WithProfessionalExperienceTimeline />
          <h2 className='text-2xl font-bold'>Publications</h2>
          <WithPublications />
        </div>
        <div className='flex w-full flex-col gap-2 md:w-[30%]'>
          <WithDownloadCVButton />
          <WithLanguages />
          <WithTechnologySkills />
        </div>
      </div>
    </div>
  );
};

export default CurriculumVitae;
