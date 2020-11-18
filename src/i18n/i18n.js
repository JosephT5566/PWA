import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import tw from './zh-TW.json';
import cn from './zh-CN.json';

// ISO-639 - ISO-3166
const resources = {
    'en': {
        translation: en,
    },
    'zh-TW': {
        translation: tw,
    },
    'zh-CN': {
        translation: cn,
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
