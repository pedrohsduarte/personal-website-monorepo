'use client';

import type { FC } from 'react';
import React from 'react';
import { Mail } from 'lucide-react';

import GithubIcon from '@/assets/icons/github.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import XIcon from '@/assets/icons/x.svg';
import HomeInfo from '@/components/Content/HomeInfo';
import { useContent } from '@/contexts/ContentContext';

const WithHomeInfo: FC = () => {
  const { name, homeInfoTitle: homeInfoTitle, githubUrl, linkedInUrl, xUrl, email } = useContent();

  const socialLinks = [
    xUrl ? { text: 'Follow on X', href: xUrl, icon: XIcon } : null,
    githubUrl ? { text: 'Follow on GitHub', href: githubUrl, icon: GithubIcon } : null,
    linkedInUrl ? { text: 'Connect on LinkedIn', href: linkedInUrl, icon: LinkedinIcon } : null,
    email ? { text: email, href: `mailto:${email}`, icon: Mail } : null,
  ].filter(link => link != null);

  return <HomeInfo personName={name} title={homeInfoTitle} socialLinks={socialLinks} />;
};

export default WithHomeInfo;
