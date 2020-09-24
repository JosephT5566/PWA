import React from 'react';
import { useTranslation } from 'react-i18next';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import Menu from '../../components/Menu';

import './styles.scss';

export default function TermDoc() {
    const { t } = useTranslation();

    const menuItems = [
        { label: t('documents.terms') },
        { label: t('documents.private-policy') },
        { label: t('documents.anti-fraud-policy') },
        { label: t('documents.income-disclaimer') },
        { label: t('documents.consent') },
    ];

    return (
        <div className="ui container">
            <ArrowBackTitle title={t('documents.title')} />
            <Menu items={menuItems} />
        </div>
    );
}
