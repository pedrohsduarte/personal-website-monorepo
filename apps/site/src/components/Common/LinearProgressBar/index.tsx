import React from 'react';

export type ProgressBarProps = {
  progress: number;
};

const LinearProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className='h-1.5 w-full bg-gray-200 dark:bg-gray-700'>
      <div className='h-1.5 bg-blue-600' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default LinearProgressBar;
