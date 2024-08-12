'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ExperienceTimeline from '@/components/ExperienceTimeline';
import { useContent } from '@/contexts/ContentContext';

export default function AboutMe() {
  const { name, experiences, title, description } = useContent();

  return (
    <>
      <div className='my-8 text-center'>
        <Image
          src={'/images/profile-image.jpg'}
          alt={name}
          width={120}
          height={120}
          className='mx-auto rounded-full'
        />
        <h1 className='mt-4 text-3xl font-bold'>{name}</h1>
        <p className='mt-2 text-xl'>{title}.</p>
        <p className='mt-4'>{description}</p>
        <ExperienceTimeline experiences={experiences} />
      </div>
      <div className='my-4 flex justify-center space-x-4'>
        <Link href='https://twitter.com/yourusername'>
          <span className='sr-only'>Twitter</span>
          <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
            {/* Twitter icon path */}
          </svg>
        </Link>
        {/* Add other social media links similarly */}
      </div>
      <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
        {/* Add your image gallery items here */}
        <div className='h-48 rounded-lg bg-gray-200' />
        <div className='h-48 rounded-lg bg-gray-200' />
        <div className='h-48 rounded-lg bg-gray-200' />
      </div>
    </>
  );
}
