'use client';

import React from 'react';

import { SiteDetails } from '@/components/Content/SiteDetails';
import { useContent } from '@/contexts/ContentContext';

const WithSiteDetails: React.FC = () => {
  const { siteDetails } = useContent();

  return <SiteDetails siteDetails={siteDetails} />;
};

export default WithSiteDetails;
