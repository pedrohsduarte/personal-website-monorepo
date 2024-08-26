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
  const { name, aboutMeTitle, githubUrl, linkedInUrl, xUrl, email } = useContent();

  // create github, linkedin, x, and email icons for AboutMe
  const socialLinks = [
    xUrl ? { text: 'Follow on X', href: xUrl, icon: XIcon } : null,
    githubUrl ? { text: 'Follow on GitHub', href: githubUrl, icon: GithubIcon } : null,
    linkedInUrl ? { text: 'Connect on LinkedIn', href: linkedInUrl, icon: LinkedinIcon } : null,
    email ? { text: email, href: `mailto:${email}`, icon: Mail } : null,
  ].filter(link => link != null);

  return <AboutMe personName={name} title={aboutMeTitle} socialLinks={socialLinks} />;
};

export default WithAboutMe;
