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
  title: string;
  socialLinks: SocialLinks[];
};

const AboutMe: FC<AboutMeProps> = ({ personName, title, socialLinks }) => {
  return (
    <div className='mx-auto max-w-2xl lg:max-w-5xl'>
      <div className='grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12'>
        <div className='lg:pl-20'>
          <div className='max-w-xs px-2.5 lg:max-w-none'>
            <Image
              alt={personName}
              src='/images/profile.jpg'
              width={800}
              height={800}
              className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800'
              sizes='(min-width: 1024px) 32rem, 20rem'
            />
          </div>
        </div>
        <div className='lg:order-first lg:row-span-2'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl'>
            {title}
          </h1>
          <div className='mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400'>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Phasellus curabitur viverra
              ultrices lobortis risus. Arcu nunc ridiculus condimentum pulvinar faucibus ipsum.
              Himenaeos dictum nec at nullam bibendum erat tincidunt phasellus.
            </p>
            <p>
              Condimentum senectus primis etiam, parturient condimentum magnis. Nibh platea sodales
              donec diam leo quis arcu. Cursus magna neque nulla nascetur curae iaculis. Aptent
              semper magna ac habitant dui; eleifend aliquam aptent. Metus condimentum eros interdum
              consectetur posuere molestie scelerisque accumsan. Arcu natoque auctor rutrum velit,
              interdum condimentum.
            </p>
            <p>
              Eget auctor nec etiam nullam ac adipiscing sociosqu massa. Sit blandit feugiat
              fermentum lorem duis. Senectus torquent euismod aptent accumsan maecenas pharetra
              suscipit natoque. Adipiscing dolor aenean euismod conubia justo porta.
            </p>
            <p>
              Porta nisl hac elit eleifend senectus proin risus nec lacinia. Phasellus ultricies
              adipiscing vel sed lorem malesuada sapien phasellus eu. Semper maecenas eleifend
              ullamcorper penatibus fermentum sagittis vivamus.
            </p>
          </div>
        </div>
        <div className='mt-4 hidden gap-3 md:flex md:flex-col md:items-start lg:pl-20'>
          {socialLinks?.map(({ text, href, icon }) => (
            <Link
              key={text}
              href={href}
              rel='noopener noreferrer'
              target='_blank'
              className='mb-2 flex items-center text-sm font-medium text-zinc-800 dark:text-zinc-200'
            >
              <Icon icon={icon} size={18} color='#71717a' />
              <span className='ml-5'>{text}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className='mt-8 flex flex-col items-start gap-3 md:hidden'>
        {socialLinks?.map(({ text, href, icon }) => (
          <Link
            key={text}
            href={href}
            rel='noopener noreferrer'
            target='_blank'
            className='mb-2 flex items-center text-sm font-medium text-zinc-800 dark:text-zinc-200'
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
