'use client';

import React, { createContext, useContext } from 'react';

export type Experience = {
  startDate: string;
  endDate: string;
  companyName: string;
  jobRole: string;
  description: string;
  logo: string;
};

export type ContentContextType = {
  name: string;
  title: string;
  description: string;
  githubUrl: string;
  linkedinUrl: string;
  xUrl: string;
  email: string;
  workExperience: Experience[];
};

const contentData: ContentContextType = {
  name: 'Pedro Duarte',
  title: 'Software Architect',
  description:
    "I'm Pedro, an IT Architect. I'm passionate about technology, innovation, and entrepreneurship. CS grad., with 13+ years of experience in software development, architecture, and leadership.",
  githubUrl: 'https://github.com/pedrohsduarte',
  linkedinUrl: 'https://www.linkedin.com/in/pedrohsduarte/',
  xUrl: 'https://x.com/femto51',
  email: 'pedro@exacode.com.br',
  workExperience: [
    {
      startDate: 'ABR 2023',
      endDate: 'PRESENT',
      companyName: 'Entrustody',
      jobRole: 'Software Architect',
      description:
        'Lead development team in creating fintech solutions, collaborating with C-level executives on business strategy and technology alignment.',
      logo: '/images/logos/entrustody.png',
    },
    {
      startDate: 'JUL 2020',
      endDate: 'MAR 2022',
      companyName: 'Exacode',
      jobRole: 'Co-founder & Software Architect',
      description:
        'Led all aspects of IT consultancy, including architecture, development, project management, sales, and operations.',
      logo: '/images/logos/exacode.png',
    },
    {
      startDate: 'SEP 2018',
      endDate: 'JUL 2020',
      companyName: 'Yandeh',
      jobRole: 'Software Architect',
      description:
        'Led development teams in building an ecosystem for the supply chain industry, focusing on solutions for manufacturers, suppliers, and retailers.',
      logo: '/images/logos/yandeh.png',
    },
    {
      startDate: 'SEP 2017',
      endDate: 'AUG 2018',
      companyName: 'Hub Fintech',
      jobRole: 'Senior Software Engineer',
      description:
        'Developed and enhanced financial systems, focusing on credit card transactions processing and digital banking solutions.',
      logo: '/images/logos/hub-fintech.png',
    },
    {
      startDate: 'OCT 2012',
      endDate: 'Aug 2017',
      companyName: 'Algar Telecom',
      jobRole: 'Senior Software Engineer',
      description:
        'Progressed from junior to senior developer, working on diverse projects and continuously expanding technical expertise.',
      logo: '/images/logos/algar-telecom.png',
    },
    {
      startDate: 'JUN 2011',
      endDate: 'SEP 2012',
      companyName: 'Kyros Tecnologia',
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
