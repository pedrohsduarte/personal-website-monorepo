'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Script from 'next/script';
import React, { useEffect, useState } from 'react';

import { ConsentTypes } from '@/lib/consent/consentManager';
import { useConsent } from '@/lib/consent/useConsent';

interface GoogleTagManagerProps {
  GTM_ID: string;
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export const GoogleTagManager: React.FC<GoogleTagManagerProps> = ({ GTM_ID }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const hasAnalyticsConsent = useConsent(ConsentTypes.ANALYTICS);
  const [currentPath, setCurrentPath] = useState<string | null>(null);

  useEffect(() => {
    if (hasAnalyticsConsent && pathname) {
      setCurrentPath(pathname + searchParams.toString());
    }
  }, [pathname, searchParams, hasAnalyticsConsent]);

  useEffect(() => {
    if (currentPath && typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'pageview',
        page: currentPath,
      });
    }
  }, [currentPath]);

  if (!hasAnalyticsConsent) {
    return null;
  }

  return (
    <>
      <Script
        id='gtm-script'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height='0'
          width='0'
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
};
