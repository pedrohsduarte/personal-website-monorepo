import React from 'react';

import CircularProgressBar from '../Common/CircularProgressBar';

import { Language as LaguangeType } from '@/contexts/ContentContext';

export type LanguagesProps = {
  languages: LaguangeType[];
};

const levelToPercentage = (level: LaguangeType['level']) => {
  switch (level) {
    case 'Native':
      return 100;
    case 'Fluent':
      return 90;
    case 'Advanced':
      return 75;
    case 'Intermediate':
      return 50;
    case 'Basic':
      return 25;
  }
};

const Language: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <div className='space-y-4 rounded-md border border-zinc-200 p-4 dark:border-zinc-700'>
      <h3 className='text-lg font-bold'>Languages</h3>
      <div className='flex flex-col gap-4'>
        {languages.map(language => (
          <div key={`skill-${language.name}`} className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-3'>
              <span className='inline-block whitespace-nowrap font-bold'>{language.name}</span>
            </div>
            <div>
              <CircularProgressBar
                progress={levelToPercentage(language.level)}
                size={24}
              ></CircularProgressBar>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Language;
