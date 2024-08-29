import { Metadata } from 'next';
import React from 'react';

import WithShortBio from '@/components/Connectors/withShortBio';
import WithSiteDetails from '@/components/Connectors/withSiteDetails';

export const metadata: Metadata = {
  title: 'About',
};

const About: React.FC = () => {
  return (
    <div className='w-full space-y-10 text-justify'>
      <h2 className='text-3xl font-bold'>Short Bio</h2>
      <WithShortBio />
      <h2 className='text-3xl font-bold'>Contact</h2>
      <p className='text-justify'>Contact me using the links in the footer of this page.</p>
      <h2 className='text-3xl font-bold'>Site Details & Privacy Policy</h2>
      <WithSiteDetails />
    </div>
  );
};

export default About;
