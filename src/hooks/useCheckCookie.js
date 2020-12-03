import { useEffect } from 'react';
import Cookie from 'js-cookie';
import i18n from '../i18n/i18n';

import { COOKIES } from '../assets/types';

const checkLanguage = () => {
    const language = Cookie.get(COOKIES.language);
    if (language || language !== '') {
        i18n.changeLanguage(language);
    }
};

const useCheckCookie = () => {
    useEffect(() => {
        checkLanguage();
    }, []);
};

export default useCheckCookie;
