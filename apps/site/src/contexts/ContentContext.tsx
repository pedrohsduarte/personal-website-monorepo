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
import { TechnologySkill } from '@/components/Content/TechnologySkills';

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
  detailsTitle?: string;
  details?: string[];
  technologies?: string;
  logo: string;
};

export type Publication = {
  title: string;
  publisher: string;
  date: string;
  link: string;
};

export type Certification = {
  title: string;
  issuer: string;
  date: string;
  logo: string;
  verificationLink: string;
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
  cvSummary: string;
  languages: Language[];
  education: Experience[];
  professionalExperience: Experience[];
  technologySkills: TechnologySkill[];
  publications?: Publication[];
  certifications?: Certification[];
};

export type NavItem = {
  label: string;
  href: string;
};

export const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'CV', href: '/cv' },
];

if (process.env.ENV !== 'prod') {
  navigationItems.splice(1, 0, { label: 'Articles', href: '/articles' });
}

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
  cvSummary:
    'Technology leader and hands-on, individual contributor with over a decade of software engineering and architectural expertise in senior technology leadership roles. Adept at bridging the gap between technical and business units, I bring a passion for continuous learning and a proven track record of leading high-performance teams to innovate and implement well-architected technology solutions.',
  languages: [
    {
      name: 'English',
      level: 'Native',
    },
    {
      name: 'Portuguese',
      level: 'Native',
    },
    {
      name: 'Spanish',
      level: 'Intermediate',
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
        'Spearhead development of fintech solutions, working closely with leadership on aligning tech with business goals.',
      detailsTitle: 'Key Project: BI & Analytics App for RIAs and Advisors',
      details: [
        'Developed comprehensive ETL pipeline using Azure technologies',
        'Implemented Medallion architecture and Delta Lake for improved data handling',
        'Designed microservices architecture to enhance system flexibility',
      ],
      technologies:
        'Azure (Synapse Analytics, ADLS, Key Vault, Function App), Apache Spark, Delta Lake, PostgreSQL, Node.js, TypeScript, Docker, Next.js, Terraform',
      logo: '/images/logos/entrustody.png',
    },
    {
      startDate: 'JUL 2020',
      endDate: 'MAR 2022',
      organization: 'Exacode',
      jobRole: 'Co-founder & Software Architect',
      description:
        'Led all aspects of IT consultancy, from solution design to project delivery for diverse client needs.',
      detailsTitle: 'Key Projects:',
      details: [
        'Designed serverless e-commerce platform processing $20M+ annual transactions',
        'Architected health tracking mobile app, achieving 92% user retention rate, and rated 4.9/5 on Play Store and App Store',
        'Developed internal business application for a multinational client company, optimizing negotiations by',
      ],
      technologies:
        'AWS (Lambda, ECS, DynamoDB, Aurora Serverless), GCP, Firebase, Java, Node.js, React, Flutter, Terraform',
      logo: '/images/logos/exacode.png',
    },
    {
      startDate: 'SEP 2018',
      endDate: 'JUL 2020',
      organization: 'Yandeh',
      jobRole: 'Software Architect',
      description:
        'Led development teams in building an ecosystem for the supply chain industry, focusing on solutions for manufacturers, suppliers, and retailers.',
      detailsTitle: 'Key Projects:',
      details: [
        'Implemented SSO solution using Keycloak, enhancing applications’ security and reducing login issues',
        'Architected B2B platform for configuring complex sales campaigns',
        'Designed continuous delivery pipelines for core services',
      ],
      technologies:
        'AWS (Lambda, S3, EC2, ECS, IAM, DynamoDB), Terraform, Docker, Keycloak, Python, Java, Node.js, TypeScript',
      logo: '/images/logos/yandeh.png',
    },
    {
      startDate: 'SEP 2017',
      endDate: 'AUG 2018',
      organization: 'Hub Fintech',
      jobRole: 'Senior Software Engineer',
      description:
        'Developed core components for credit card processing platform and digital banking solutions.',
      detailsTitle: 'Key Achievements:',
      details: [
        'Developed ISO 8583 compliant transaction processing systems, handling thousands of daily transactions',
      ],
      technologies: 'Java, RabbitMQ, Angular, MySQL, JUnit',
      logo: '/images/logos/hub-fintech.png',
    },
    {
      startDate: 'OCT 2012',
      endDate: 'Aug 2017',
      organization: 'Algar Telecom',
      jobRole: 'Senior Software Engineer',
      description:
        'Progressed from junior to senior developer, contributing to diverse OSS/BSS telecom projects.',
      detailsTitle: 'Key Achievements:',
      details: [
        'Engineered an inter-system communication service, reducing data transfer errors',
        'Enhanced and customized modules for a complex billing system',
        'Led a bus location tracking project using Raspberry Pi',
      ],
      technologies: 'Java, Spring, Angular, PostgreSQL, Oracle, Docker, REST, SOAP',
      logo: '/images/logos/algar-telecom.png',
    },
    {
      startDate: 'JUN 2011',
      endDate: 'SEP 2012',
      organization: 'Kyros Tecnologia',
      jobRole: 'Intern',
      description: 'Worked on an outsourced team, developing new modules of a billing system.',
      technologies: 'Oracle, SQL, Shell script',
      logo: '/images/logos/kyros-tecnologia.png',
    },
  ],
  publications: [
    {
      title: 'An Architecture for Monitoring and Improving Public Transportation Systems',
      publisher: 'IEEE (AINA)',
      date: '2016',
      link: 'https://ieeexplore.ieee.org/document/7474181',
    },
  ],
  certifications: [
    {
      title: 'Exam Certificate: ITIL® Foundation Certificate in IT Service Management (ITILF)',
      issuer: 'EXIN',
      date: 'Jul 2013',
      logo: '/images/logos/exin.png',
      verificationLink:
        'https://mylogin.exin.nl/polarserver.asp?Script=GetLinkedInPost&CandidateCertificateGUID=980A9177-BABB-4019-941A-92EC75A42D83&ts=391936703',
    },
    {
      title: 'Certified Linux Administrator (LPIC-1)',
      issuer: 'Linux Professional Institute',
      date: 'Apr 2013',
      logo: '/images/logos/lpi.jpeg',
      verificationLink:
        'https://cs.lpi.org/caf/Xamman/certification/verify/LPI000278778/td7jzgyws6',
    },
    {
      title: 'Oracle Certified Professional, Java SE 6 Programmer',
      issuer: 'Oracle',
      date: 'Dec 2012',
      logo: '/images/logos/oracle.jpeg',
      verificationLink: 'https://www.credly.com/badges/22c4e296-51f4-4586-bb0e-332741aef4db',
    },
  ],
  technologySkills: [
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
