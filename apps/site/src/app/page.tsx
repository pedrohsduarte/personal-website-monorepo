import Image from 'next/image';
import Link from 'next/link';

import ExperienceTimeline from './components/ExperienceTimeline';

const experiences = [
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
    jobRole: 'Software Engineer',
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
  // ... add more experiences
];

export default function Home() {
  return (
    <div className='mx-auto max-w-4xl px-4'>
      <div className='my-8 text-center'>
        <Image
          src={'/images/profile-image.jpg'}
          alt='Pedro Duarte'
          width={120}
          height={120}
          className='mx-auto rounded-full'
        />
        <h1 className='mt-4 text-3xl font-bold'>Your Name</h1>
        <p className='mt-2 text-xl'>Software designer, founder, and amateur astronaut.</p>
        <p className='mt-4'>
          I&apos;m [Your Name], a software designer and entrepreneur based in [Your City]. I&apos;m
          the founder and CEO of [Your Company], where we develop technologies that empower regular
          people to explore space on their own terms.
        </p>
        <ExperienceTimeline experiences={experiences} />
      </div>
      <div className='my-4 flex justify-center space-x-4'>
        <Link href='https://twitter.com/yourusername'>
          <span className='sr-only'>Twitter</span>
          <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
            {/* Twitter icon path */}
          </svg>
        </Link>
        {/* Add other social media links similarly */}
      </div>
      <div className='my-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
        {/* Add your image gallery items here */}
        <div className='h-48 rounded-lg bg-gray-200' />
        <div className='h-48 rounded-lg bg-gray-200' />
        <div className='h-48 rounded-lg bg-gray-200' />
      </div>
    </div>
  );
}
