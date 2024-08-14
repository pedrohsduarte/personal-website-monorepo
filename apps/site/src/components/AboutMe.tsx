'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import Icon, { IconType } from '@/components/Icon';

type SocialLinks = {
  text: string;
  href: string;
  icon: IconType;
};

type AboutMeProps = {
  personName: string;
  description: string;
  socialLinks: SocialLinks[];
};

const AboutMe: FC<AboutMeProps> = ({ personName, description, socialLinks }) => {
  return (
    <div className='container mx-auto py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24'>
        <div className='order-2 md:order-1'>
          <h1 className='mb-4 text-4xl font-bold md:text-5xl'>{personName}</h1>
          <p className='mb-6 text-xl'>{description}</p>
        </div>
        <div className='order-1 flex flex-col items-start md:order-2'>
          <div className='relative mb-6 aspect-square w-full max-w-[320px]'>
            <Image
              src='/images/profile.jpg'
              alt={personName}
              layout='fill'
              objectFit='cover'
              className='rotate-3 rounded-3xl'
            />
          </div>
          <div className='mt-4 hidden gap-3 md:flex md:flex-col md:items-start'>
            {socialLinks?.map(({ text, href, icon }) => (
              <Link
                key={text}
                href={href}
                className='mb-2 flex items-center text-sm font-medium text-zinc-800 transition dark:text-zinc-200'
              >
                <Icon icon={icon} size={18} color='#71717a' />
                <span className='ml-5'>{text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-8 flex flex-col items-start md:hidden'>
        {socialLinks?.map(({ text, href, icon }) => (
          <Link
            key={text}
            href={href}
            className='mb-2 flex items-center text-sm font-medium text-zinc-800 transition dark:text-zinc-200'
          >
            <Icon icon={icon} size={16} color='#71717a' />
            <span className='ml-2'>{text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
