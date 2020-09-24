import React from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';
import Menu from '../../components/Menu';

import './styles.scss';

export default function ProfilePage() {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const menuItems = [
        {
            label: t('profile.basic'),
            onClick: () => {
                navigation.navigate(`${currentURL}/basic`);
            },
        },
        {
            label: t('profile.upload-kyc'),
            onClick: () => {
                navigation.navigate(`${currentURL}/upload`);
            },
        },
        {
            label: t('profile.document'),
            onClick: () => {
                navigation.navigate(`${currentURL}/doc`);
            },
        },
        {
            label: t('profile.about'),
            onClick: () => {
                navigation.navigate(`${currentURL}/about`);
            },
        },
        {
            label: t('profile.language'),
            onClick: () => {
                navigation.navigate(`${currentURL}/language`);
            },
        },
    ];

    return (
        <div className="ui container">
            <Title title={t('profile.title')} />
            <Menu items={menuItems} />
        </div>
    );
}
