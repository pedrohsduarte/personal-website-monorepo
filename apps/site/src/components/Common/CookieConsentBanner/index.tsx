'use client';

import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';

import { ConsentTypes, getConsent, setConsent } from '@/lib/consent/consentManager';

export const CookieConsentBanner: React.FC = () => {
  const [consentGiven, setConsentGiven] = useState<boolean>(false);

  useEffect(() => {
    const storedConsent = getConsent();
    setConsentGiven(Object.keys(storedConsent).length > 0);
  }, []);

  const handleAccept = () => {
    Object.values(ConsentTypes).forEach(type => setConsent(type as ConsentTypes, true));
    setConsentGiven(true);
  };

  const handleDecline = () => {
    Object.values(ConsentTypes).forEach(type => {
      if (type !== ConsentTypes.NECESSARY) {
        setConsent(type as ConsentTypes, false);
      }
    });
    setConsent(ConsentTypes.NECESSARY, true);
    setConsentGiven(true);
  };

  if (consentGiven) return null;

  return (
    <CookieConsent
      location='bottom'
      buttonText='Accept All'
      declineButtonText='Decline Non-Essential'
      onAccept={handleAccept}
      onDecline={handleDecline}
      enableDeclineButton
      buttonStyle={{ backgroundColor: '#2563eb', color: 'white' }}
      declineButtonStyle={{ backgroundColor: '#727272', color: 'white' }}
    >
      This site uses cookies to enhance your experience. By continuing to visit this site you agree
      to the use of cookies.
    </CookieConsent>
  );
};
