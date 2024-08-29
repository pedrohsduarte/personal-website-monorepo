import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`mt-16 sm:mt-32 sm:px-8 ${className}`}>
      <div className='mx-auto w-full max-w-7xl lg:px-8'>
        <div className='relative px-4 sm:px-8 lg:px-12'>
          <div className='mx-auto max-w-2xl lg:max-w-5xl'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Container;
