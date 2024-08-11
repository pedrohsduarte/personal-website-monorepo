import Image from 'next/image';
import React from 'react';

interface Experience {
  startDate: string;
  endDate: string;
  companyName: string;
  jobRole: string;
  description: string;
  logo: string;
}

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({experiences}) => {
  return (
    <div className='relative'>
      {experiences.map((exp, index) => (
        <div key={index} className='flex flex-row'>
          <div className='flex flex-col items-center'>
            {/* Logo */}
            <div className='relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-gray-100 bg-white dark:bg-zinc-800'>
              <div className='relative h-6 w-6'>
                <Image
                  src={exp.logo}
                  alt={`${exp.companyName} logo`}
                  fill
                  sizes='2rem'
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>

            {/* Timeline line */}
            {index < experiences.length - 1 && (
              <div className='my-2 w-0.5 flex-grow bg-gray-100 dark:bg-gray-800' />
            )}
          </div>

          {/* Content */}
          <div className='flex-grow pb-8 pl-4 text-left'>
            <div className='text-sm uppercase text-gray-500'>
              {exp.startDate} - {exp.endDate}
            </div>
            <h3 className='text-xl font-bold'>{exp.jobRole}</h3>
            <h4 className='text-lg font-semibold text-gray-600 dark:text-gray-400'>
              {exp.companyName}
            </h4>
            <p className='mt-2 text-gray-700 dark:text-gray-300'>{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
