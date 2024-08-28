import React, { useState } from 'react';

import LinearProgressBar from '@/components/Common/LinearProgressBar';
import Icon, { IconType } from '@/components/Icon';

export type TechnologySkill = {
  icon: IconType;
  name: string;
  progress: number;
};

export type TechnologySkillsProps = {
  skills: TechnologySkill[];
};

const TechnologySkills: React.FC<TechnologySkillsProps> = ({ skills }) => {
  const [showAll, setShowAll] = useState(false);

  const sortedSkills = skills.sort((a, b) => {
    if (a.progress !== b.progress) return b.progress - a.progress;
    return a.name.localeCompare(b.name);
  });

  const displayedSkills = showAll ? sortedSkills : sortedSkills.slice(0, 10);

  return (
    <div className='space-y-4 rounded-md border border-zinc-200 p-4 dark:border-zinc-700'>
      <h3 className='text-lg font-bold'>Technology Skills</h3>
      <div className='flex flex-col gap-4'>
        {displayedSkills.map(skill => (
          <div key={`skill-${skill.name}`} className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-3'>
              <Icon icon={skill.icon} size={26} color='#71717a' grayscale={true} />
              <span className='sm:text-md lg:text-md inline-block whitespace-nowrap font-bold md:max-md:text-xs '>
                {skill.name}
              </span>
            </div>
            <div className='w-20'>
              <LinearProgressBar progress={skill.progress}></LinearProgressBar>
            </div>
          </div>
        ))}
      </div>
      {skills.length > 10 && !showAll && (
        <div className='flex justify-center'>
          <button
            onClick={() => setShowAll(true)}
            className='text-sm font-semibold text-blue-800 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400'
          >
            Show more
          </button>
        </div>
      )}
    </div>
  );
};

export default TechnologySkills;
