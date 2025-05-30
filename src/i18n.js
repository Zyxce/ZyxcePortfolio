import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import en from './locales/en.json'
import ru from './locales/ru.json'
import by from './locales/by.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
      by: { translation: by },
    },
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
