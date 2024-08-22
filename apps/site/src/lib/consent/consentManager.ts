export enum ConsentTypes {
  NECESSARY = 'necessary',
  ANALYTICS = 'analytics',
  MARKETING = 'marketing',
  PREFERENCES = 'preferences',
}

type ConsentPreferences = {
  [key in ConsentTypes]?: boolean;
};

const CONSENT_KEY = 'user-consent-preferences';

export const getConsent = (): ConsentPreferences => {
  if (typeof window === 'undefined') return {};
  const storedConsent = localStorage.getItem(CONSENT_KEY);
  return storedConsent ? JSON.parse(storedConsent) : {};
};

export const setConsent = (consentType: ConsentTypes, value: boolean): void => {
  const currentConsent = getConsent();
  const newConsent = { ...currentConsent, [consentType]: value };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(newConsent));

  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('consentUpdated', { detail: newConsent }));
  }
};

export const checkConsent = (consentType: ConsentTypes): boolean => {
  const consent = getConsent();
  return consent[consentType] === true;
};
