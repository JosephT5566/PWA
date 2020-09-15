import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './assets/i18n/en.json';
import tw from './assets/i18n/zh-TW.json';

const resources = {
    'en': {
        translation: en,
    },
    'zh-TW': {
        translation: tw,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'zh-TW', // default language
    fallbackLng: 'en', // use this language if there is no translation in selected language
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
