'use client';

import React from 'react';
import { Download } from 'lucide-react';

import { useContent } from '@/contexts/ContentContext';
import { handleDownload } from '@/utils/download';

const WithDownloadCVButton: React.FC = () => {
  const { cvFile } = useContent();

  return (
    cvFile && (
      <button
        onClick={() => handleDownload('CV_Pedro_Duarte.pdf', '/pdfs/cv.pdf')}
        className='flex items-center justify-center gap-1 rounded-md border border-zinc-200 p-4 dark:border-zinc-700'
      >
        <span className='text-sm font-bold'>Download CV</span>
        <Download size={16} />
      </button>
    )
  );
};

export default WithDownloadCVButton;
