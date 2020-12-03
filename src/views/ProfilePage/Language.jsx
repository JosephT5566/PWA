import React from 'react';
import { useTranslation } from 'react-i18next';
import Cookie from 'js-cookie';

import i18n from '../../i18n/i18n';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import Menu from '../../components/Menu';
import { COOKIES } from '../../assets/types';

import './styles.scss';

export default function TermDoc() {
    const { t } = useTranslation();

    const handleChangeLanguage = (language) => {
        i18n.changeLanguage(language);
        Cookie.set(COOKIES.language, language);
    };

    const menuItems = [
        {
            label: '繁體中文',
            onClick: () => {
                handleChangeLanguage('zh-TW');
            },
        },
        {
            label: '簡体中文',
            onClick: () => {
                handleChangeLanguage('zh-CN');
            },
        },
        {
            label: 'English',
            onClick: () => {
                handleChangeLanguage('en');
            },
        },
        {
            label: '日本語',
            onClick: () => {
                // handleChangeLanguage('ja');
            },
        },
    ];

    return (
        <div className="ui container">
            <ArrowBackTitle title={t('profile.language')} />
            <Menu items={menuItems} />
        </div>
    );
}
