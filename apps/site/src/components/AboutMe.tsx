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
              Welcome! Here I share a bit about me and my thoughts on software engineering. Feel
              free to explore my articles and CV to learn more about my work and ideas.
            </p>
            <p>
              In software architecture, I’ve learned there’s no one-size-fits-all solution. It’s
              about context, options, and trade-offs. Modern engineering demands both micro and
              macro thinking, and being able to compare opposing ideas.
            </p>
            <p>
              While there’s a wealth of great resources in our field, I believe real-world
              challenges are the best teachers. For example, building an e-commerce site from
              scratch taught me more about system design than any textbook could. Embracing such
              challenges and giving our best effort leads to growth and fulfillment.
            </p>
            <p>
              I’m passionate about using technology to make our lives better. Arthur C. Clarke’s
              insight <i>“Any sufficiently advanced technology is indistinguishable from magic”</i>{' '}
              deeply reasonates with me. It encapsulates one of my goals: to create software that
              positively impacts the world, even if it’s just a small part.
            </p>
            <p>
              I’m always eager to learn and grow. If you have a project involving cloud architecture
              or a cool app that you think I could help with, I’d love to hear about it!
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
