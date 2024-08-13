'use client';

import type { FC } from 'react';
import React from 'react';
import { Mail } from 'lucide-react';

import { useContent } from '../contexts/ContentContext';
import AboutMe from './AboutMe';

import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import XIcon from '@/assets/icons/x.svg';

const WithAboutMe: FC = () => {
  const { name, description, githubUrl, linkedinUrl, xUrl, email } = useContent();

  // create github, linkedin, x, and email icons for AboutMe
  const socialLinks = [
    { text: 'Follow on X', href: xUrl, icon: XIcon },
    { text: 'Follow on Github', href: githubUrl, icon: GithubIcon },
    { text: 'Connect on LinkedIn', href: linkedinUrl, icon: LinkedinIcon },
    { text: email, href: `mailto:${email}`, icon: Mail },
  ];

  return <AboutMe personName={name} description={description} socialLinks={socialLinks} />;
};

export default WithAboutMe;
