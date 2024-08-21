import React from 'react';

export type CircularProgressBarProps = {
  progress: number;
  size?: number;
  strokeWidth?: number;
};

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  progress,
  size = 60,
  strokeWidth = 4,
}) => {
  const normalizedProgress = Math.min(100, Math.max(0, progress));
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (normalizedProgress / 100) * circumference;

  return (
    <div className='relative' style={{ width: size, height: size }}>
      <svg
        className='-rotate-90 transform'
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <circle
          className='text-gray-200 transition-all duration-300 ease-in-out dark:text-gray-700'
          stroke='currentColor'
          strokeWidth={strokeWidth}
          fill='none'
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className='text-blue-600 transition-all duration-300 ease-in-out'
          stroke='currentColor'
          strokeWidth={strokeWidth}
          strokeLinecap='round'
          fill='none'
          r={radius}
          cx={size / 2}
          cy={size / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: strokeDashoffset,
          }}
        />
      </svg>
    </div>
  );
};

export default CircularProgressBar;
