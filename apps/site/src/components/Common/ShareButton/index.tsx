'use client';

interface ShareButtonProps {
  icon: React.ReactNode;
  url: string;
  network: 'linkedin' | 'twitter' | 'facebook';
}

function ShareButton({ icon, url, network }: ShareButtonProps) {
  const handleShare = () => {
    let shareUrl = '';
    switch (network) {
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
    }
    window.open(shareUrl, '_blank');
  };

  return (
    <button onClick={handleShare} className='text-gray-600 transition-colors hover:text-gray-900'>
      {icon}
    </button>
  );
}

export default ShareButton;
