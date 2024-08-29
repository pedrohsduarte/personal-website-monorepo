import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ExternalLink } from 'lucide-react';

import Divider from '@/components/Common/Divider';
import { Certification } from '@/contexts/ContentContext';

interface CertificationsProps {
  certifications?: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <>
      {certifications && (
        <div className='relative'>
          <ul>
            {certifications.map((cert, index) => (
              <li key={index}>
                <div className='flex gap-8'>
                  <div className='relative h-10 w-10'>
                    <Image
                      src={cert.logo}
                      alt={`${cert.issuer} logo`}
                      fill
                      sizes='2rem'
                      style={{
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                  <div>
                    <h5 className='font-semibold'>{cert.title}</h5>
                    <p className='font-normal'>{cert.issuer}</p>
                    <p className='font-light'>Issued {cert.date}</p>
                    <Link target='_blank' rel='noopener noreferrer' href={cert.verificationLink}>
                      <button className='mt-2 flex items-center justify-center gap-1 rounded-full border border-zinc-200 px-4 py-2 dark:border-zinc-700'>
                        <span className='text-sm font-semibold'>Show credential</span>
                        <ExternalLink size={16} />
                      </button>
                    </Link>
                  </div>
                </div>
                {index < certifications.length - 1 && <Divider />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Certifications;
