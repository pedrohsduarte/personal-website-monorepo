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

export type Language = {
  name: string;
  level: 'Native' | 'Fluent' | 'Advanced' | 'Intermediate' | 'Basic';
};

export type Experience = {
  startDate: string;
  endDate: string;
  organization: string;
  jobRole?: string;
  description?: string;
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
  homeInfoTitle: string;
  githubUrl?: string;
  linkedInUrl?: string;
  xUrl?: string;
  email?: string;
  shortBio: string[];
  siteDetails: string[];
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
  { label: 'About', href: '/about' },
];

if (process.env.ENV === 'dev') {
  navigationItems.splice(1, 0, { label: 'Blog', href: '/blog' });
}

export const contentData: ContentContextType = {
  name: 'Pedro Duarte',
  jobTitle: 'Software Architect',
  homeInfoTitle: 'Hi, I’m Pedro Duarte',
  githubUrl: 'https://github.com/pedrohsduarte',
  linkedInUrl: 'https://www.linkedin.com/in/pedrohsduarte/',
  xUrl: 'https://x.com/femto51',
  email: 'pedro@exacode.com.br',
  shortBio: [
    'Pedro is a technology leader and hands-on, individual contributor with over a decade of software engineering and architectural expertise in senior technology leadership roles. Adept at bridging the gap between technical and business units, Pedro brings a passion for continuous learning and a proven track record of leading high-performance teams to innovate and implement well-architected technology solutions.',
  ],
  siteDetails: [
    'This site was built using Next.js. You can find the monorepo containing all the code <a class="text-blue-600" href="https://github.com/pedrohsduarte/personal-website-monorepo">on GitHub</a>. It’s hosted on AWS Amplify, which includes global CDN and SSL certificates.',
    'The site uses Google Analytics, but does not collect personal information. It configures Google Analytics to anonymize IP addresses and to not share data with Google.',
  ],
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
      jobRole: 'B.S. in Computer Science',
      description:
        'Relevant Coursework: Object Oriented Programming, Databases, Discrete Maths, Data Structures and Algorithms, Analysis of Algorithms, Operating Systems, Computer Networks, Data Mining, Image Processing.',
      logo: '/images/logos/ufu-logo.png',
    },
  ],
  professionalExperience: [
    {
      startDate: 'ABR 2023',
      endDate: 'PRESENT',
      organization: 'Entrustody',
      jobRole: 'Software Architect',
      details: [
        'Led end-to-end development of a scalable, multi-tenant Data pipeline and Analytics solution, driving data-informed decisions for financial advisors.',
        'Reduced annual Azure cost by 60% through strategic service selection and identifying unused resources.',
        'Enhanced data security and compliance by migrating core legacy Azure infrastructure to a private network topology.',
      ],
      technologies:
        'Azure, AWS, TypeScript, Spark, Delta Lake, PostgreSQL, Docker, Terraform, GraphQL, Prisma, Log Analytics, Azure Monitor.',
      logo: '/images/logos/entrustody.png',
    },
    {
      startDate: 'JUL 2020',
      endDate: 'MAR 2023',
      organization: 'Exacode',
      jobRole: 'Software Architect',
      details: [
        "Reduced client's expenses by over 30%, by digitalizing their operations through building a serverless e-commerce app.",
        'Built a health tracking app, achieving 92% user retention, and 4.9-star app store rating.',
        'Developed business system for a Fortune 500 client, accelerating deal closure velocity by 40%.',
      ],
      technologies:
        'AWS, GCP, Firebase, Java, Spring, Python, Node.js, TypeScript, Terraform, React, Tailwind, Flutter, Redis, CloudWatch, Crashlytics.',
      logo: '/images/logos/exacode.png',
    },
    {
      startDate: 'SEP 2018',
      endDate: 'JUL 2020',
      organization: 'Yandeh',
      jobRole: 'Software Architect',
      details: [
        'Streamlined cross-application user experience by implementing SSO solution using Keycloak.',
        'Optimized clients’ sales operations by architecting a B2B platform for complex sales campaigns configuration.',
        'Improved the development team’s feature delivery rate by fostering continuous delivery best practices.',
      ],
      technologies:
        'AWS, Java, Python, Node.js, TypeScript, Terraform, Docker, Keycloak, Flask, React, CircleCI, New Relic, OpenID, OAuth, Kibana.',
      logo: '/images/logos/yandeh.png',
    },
    {
      startDate: 'SEP 2017',
      endDate: 'AUG 2018',
      organization: 'Hub Fintech',
      jobRole: 'Senior Software Engineer',
      details: [
        'Enhanced security and compliance of ISO 8583 payment processing platform by creating a fraud detection module.',
        'Facilitated fund transfers of a digital banking client by implementing an account linking feature.',
      ],
      technologies: 'Java, RabbitMQ, Angular, MySQL, JUnit, Hystrix, Jenkins.',
      logo: '/images/logos/hub-fintech.png',
    },
    {
      startDate: 'OCT 2012',
      endDate: 'Aug 2017',
      organization: 'Algar Telecom',
      jobRole: 'Senior Software Engineer',
      details: [
        'Developed multiple core applications for OSS/BSS telecom systems, streamlining operations.',
      ],
      technologies:
        'Java, JavaScript, Spring, JavaEE, WildFly, Angular, PostgreSQL, Docker, REST, SOAP, Hystrix, Hazelcast, Jenkins.',
      logo: '/images/logos/algar-telecom.png',
    },
    {
      startDate: 'JUN 2011',
      endDate: 'SEP 2012',
      organization: 'Kyros Tecnologia',
      jobRole: 'Software Developer',
      details: [
        'Contributed to new and existing custom modules of a complex billing system (Comverse ONE).',
      ],
      technologies: 'Python, PL/SQL, Shell script.',
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
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'AWS',
      date: 'Dec 2024',
      logo: '/images/logos/aws-saa-c03.png',
      verificationLink:
        'https://cp.certmetrics.com/amazon/en/public/verify/credential/468c592088af47499d4760f95aad876b',
    },
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
