'use client';

import { LinkIcon } from 'lucide-react';

import Icon from '../Icon';

function CopyLinkButton({ url }: { url: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      // You might want to show a tooltip or notification here
      alert('Link copied to clipboard!');
    });
  };

  return (
    <button onClick={handleCopy} className='text-gray-600 transition-colors hover:text-gray-900'>
      <Icon icon={LinkIcon} size={18} color='#71717a' />
    </button>
  );
}

export default CopyLinkButton;
