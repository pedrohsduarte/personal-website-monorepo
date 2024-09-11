'use client';

import React from 'react';
import { Download } from 'lucide-react';

import { handleDownload } from '@/utils/download';

const WithDownloadCVButton: React.FC = () => {
  return (
    <button
      onClick={() => handleDownload('Resume_Pedro_Duarte.pdf', '/pdfs/resume.pdf')}
      className='flex items-center justify-center gap-1 rounded-md border border-zinc-200 p-4 dark:border-zinc-700'
    >
      <Download size={16} />
      <span className='text-sm font-bold'>Download Resume</span>
    </button>
  );
};

export default WithDownloadCVButton;
