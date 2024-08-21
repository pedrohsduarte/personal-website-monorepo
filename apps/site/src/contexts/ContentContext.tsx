'use client';

import React, { createContext, useContext } from 'react';

import AWSIcon from '@/assets/icons/aws.svg';
import AzureIcon from '@/assets/icons/azure.svg';
import DockerIcon from '@/assets/icons/docker.svg';
import FlutterIcon from '@/assets/icons/flutter.svg';
import JavaIcon from '@/assets/icons/java.svg';
import PostgresIcon from '@/assets/icons/postgres.svg';
import PythonIcon from '@/assets/icons/python.svg';
import ReactIcon from '@/assets/icons/react.svg';
import TerraformIcon from '@/assets/icons/terraform.svg';
import TypeScriptIcon from '@/assets/icons/typescript.svg';
import { TechnicalSkill } from '@/components/TechnicalSkills';

export type CVFile = {
  fileName: string;
  fileUrl: string;
};

export type Language = {
  name: string;
  level: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';
};

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
  cvFile?: CVFile;
  languages: Language[];
  education: Experience[];
  professionalExperience: Experience[];
  technicalSkills: TechnicalSkill[];
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

export const contentData: ContentContextType = {
  name: 'Pedro Duarte',
  jobTitle: 'Software Architect',
  aboutMeTitle: 'Hi, I’m Pedro Duarte',
  githubUrl: 'https://github.com/pedrohsduarte',
  linkedInUrl: 'https://www.linkedin.com/in/pedrohsduarte/',
  xUrl: 'https://x.com/femto51',
  email: 'pedro@exacode.com.br',
  cvFile: {
    fileName: 'CV_Pedro_Duarte.pdf',
    fileUrl: '/pdfs/cv.pdf',
  },
  languages: [
    {
      name: 'Portuguese',
      level: 'Native',
    },
    {
      name: 'English',
      level: 'Fluent',
    },
  ],
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
  technicalSkills: [
    {
      name: 'React',
      icon: ReactIcon,
      progress: 80,
    },
    {
      name: 'TypeScript',
      icon: TypeScriptIcon,
      progress: 80,
    },
    {
      name: 'Docker',
      icon: DockerIcon,
      progress: 90,
    },
    {
      name: 'AWS',
      icon: AWSIcon,
      progress: 90,
    },
    {
      name: 'Azure',
      icon: AzureIcon,
      progress: 85,
    },
    {
      name: 'Terraform',
      icon: TerraformIcon,
      progress: 90,
    },
    {
      name: 'Java',
      icon: JavaIcon,
      progress: 95,
    },
    {
      name: 'Python',
      icon: PythonIcon,
      progress: 85,
    },
    {
      name: 'SQL',
      icon: PostgresIcon,
      progress: 90,
    },
    {
      name: 'Flutter',
      icon: FlutterIcon,
      progress: 80,
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
