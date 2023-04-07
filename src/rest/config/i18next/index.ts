import { InitOptions } from 'i18next';
import { en, es } from './locales/index.js';

const i18Config: InitOptions = {
  lng: 'en',
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    }
  }
}

export default i18Config;