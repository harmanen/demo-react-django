import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationFI from './locales/fi/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  fi: {
    translation: translationFI,
  },
};

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources,
    debug: true,
    lng: 'en',
    fallbackLng: 'en',
    keySeparator: false,
  });

export default i18n;
