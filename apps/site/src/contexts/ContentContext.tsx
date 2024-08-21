'use client';

import React, { createContext, useContext } from 'react';

export type Experience = {
  startDate: string;
  endDate: string;
  organization: string;
  jobRole?: string;
  description: string;
  logo: string;
};

export type ContentContextType = {
  name: string;
  jobTitle: string;
  aboutMeTitle: string;
  githubUrl?: string;
  linkedInUrl?: string;
  xUrl?: string;
  email?: string;
  education: Experience[];
  professionalExperience: Experience[];
};

export type NavItem = {
  label: string;
  href: string;
};

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Articles', href: '/articles' },
  { label: 'Resume', href: '/resume' },
];

const contentData: ContentContextType = {
  name: 'Pedro Duarte',
  jobTitle: 'Software Architect',
  aboutMeTitle: 'Hi, I’m Pedro Duarte',
  githubUrl: 'https://github.com/pedrohsduarte',
  linkedInUrl: 'https://www.linkedin.com/in/pedrohsduarte/',
  xUrl: 'https://x.com/femto51',
  email: 'pedro@exacode.com.br',
  education: [
    {
      startDate: '2009',
      endDate: '2013',
      organization: 'Universidade Federal de Uberlândia',
      jobRole: 'Bachelor of Computer Science',
      description:
        'Throughout my years at UFU, I immersed myself in a dynamic learning environment, surrounded by dedicated faculty and talented peers.',
      logo: '/images/logos/ufu-logo.png',
    },
  ],
  professionalExperience: [
    {
      startDate: 'ABR 2023',
      endDate: 'PRESENT',
      organization: 'Entrustody',
      jobRole: 'Software Architect',
      description:
        'Lead development team in creating fintech solutions, collaborating with C-level executives on business strategy and technology alignment.',
      logo: '/images/logos/entrustody.png',
    },
    {
      startDate: 'JUL 2020',
      endDate: 'MAR 2022',
      organization: 'Exacode',
      jobRole: 'Co-founder & Software Architect',
      description:
        'Led all aspects of IT consultancy, including architecture, development, project management, sales, and operations.',
      logo: '/images/logos/exacode.png',
    },
    {
      startDate: 'SEP 2018',
      endDate: 'JUL 2020',
      organization: 'Yandeh',
      jobRole: 'Software Architect',
      description:
        'Led development teams in building an ecosystem for the supply chain industry, focusing on solutions for manufacturers, suppliers, and retailers.',
      logo: '/images/logos/yandeh.png',
    },
    {
      startDate: 'SEP 2017',
      endDate: 'AUG 2018',
      organization: 'Hub Fintech',
      jobRole: 'Senior Software Engineer',
      description:
        'Developed and enhanced financial systems, focusing on credit card transactions processing and digital banking solutions.',
      logo: '/images/logos/hub-fintech.png',
    },
    {
      startDate: 'OCT 2012',
      endDate: 'Aug 2017',
      organization: 'Algar Telecom',
      jobRole: 'Senior Software Engineer',
      description:
        'Progressed from junior to senior developer, working on diverse projects and continuously expanding technical expertise.',
      logo: '/images/logos/algar-telecom.png',
    },
    {
      startDate: 'JUN 2011',
      endDate: 'SEP 2012',
      organization: 'Kyros Tecnologia',
      jobRole: 'Intern',
      description:
        'Worked on an outsourced team for Algar Telecom, contributing to the Comverse Kenan FX billing system',
      logo: '/images/logos/kyros-tecnologia.png',
    },
  ],
};

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContentContext.Provider value={contentData}>{children}</ContentContext.Provider>;
};

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};
