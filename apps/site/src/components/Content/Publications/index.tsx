import Link from 'next/link';
import React from 'react';
import { ExternalLink } from 'lucide-react';

import Icon from '../../Common/Icon';

import { Publication } from '@/contexts/ContentContext';

interface PublicationsProps {
  publications?: Publication[];
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <>
      {publications && (
        <div className='relative'>
          <ul>
            {publications.map((pub, index) => (
              <li key={index} className='list-inside list-disc pl-4'>
                <Link href={pub.link} rel='noopener noreferrer' target='_blank'>
                  <span>&ldquo;{pub.title}&rdquo;</span> —{' '}
                  <span>
                    <i>{pub.publisher}</i>, {pub.date}
                  </span>
                  <Icon className='ml-2' icon={ExternalLink} size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Publications;
