import React from 'react';
import { useTranslation } from 'react-i18next';

import i18n from '../../i18n/i18n';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import Menu from '../../components/Menu';

import './styles.scss';

export default function TermDoc() {
    const { t } = useTranslation();

    const menuItems = [
        {
            label: '繁體中文',
            onClick: () => {
                i18n.changeLanguage('zh-TW');
            },
        },
        {
            label: '簡体中文',
            onClick: () => {
                i18n.changeLanguage('zh-CN');
            },
        },
        {
            label: 'English',
            onClick: () => {
                i18n.changeLanguage('en');
            },
        },
        {
            label: '日本語',
            onClick: () => {
                // i18n.changeLanguage('ja');
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
