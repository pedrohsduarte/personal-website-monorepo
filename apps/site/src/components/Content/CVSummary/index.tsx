import React from 'react';

interface CVSummarysProps {
  cvSummary: string;
}

const CVSummarys: React.FC<CVSummarysProps> = ({ cvSummary }) => {
  return (
    <>
      {cvSummary && (
        <div className='relative'>
          <p className='text-justify'>{cvSummary}</p>
        </div>
      )}
    </>
  );
};

export default CVSummarys;
