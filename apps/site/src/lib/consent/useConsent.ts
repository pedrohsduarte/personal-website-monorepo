import { useEffect, useState } from 'react';

import { checkConsent, ConsentTypes } from './consentManager';

export const useConsent = (consentType: ConsentTypes): boolean => {
  const [hasConsent, setHasConsent] = useState<boolean>(false);

  useEffect(() => {
    setHasConsent(checkConsent(consentType));

    const handleConsentUpdate = () => {
      setHasConsent(checkConsent(consentType));
    };

    window.addEventListener('consentUpdated', handleConsentUpdate);

    return () => {
      window.removeEventListener('consentUpdated', handleConsentUpdate);
    };
  }, [consentType]);

  return hasConsent;
};
