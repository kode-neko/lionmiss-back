import { InitOptions } from 'i18next';
import { en, es } from './locales/index';

const i18Config: InitOptions = {
  lng: 'en',
  debug: false,
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