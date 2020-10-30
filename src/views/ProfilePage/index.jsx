import React, { useContext } from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';

import LoginContext from '../../contexts/LoginContext';

import Title from '../../components/Title/Title';
import Menu from '../../components/Menu';

import './styles.scss';

export default function ProfilePage() {
    const { isLoggedin, onJWTChange } = useContext(LoginContext);
    const navigation = useNavigation();
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const defaultItems = [
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

    const basicItems = [
        {
            label: t('profile.basic'),
            onClick: () => {
                navigation.navigate(`${currentURL}/basic`);
            },
        },
        {
            label: t('profile.bank'),
            onClick: () => {
                navigation.navigate(`${currentURL}/bank`);
            },
        },
    ];

    const loginItems = [
        {
            label: '登入',
            onClick: () => {
                navigation.navigate(`${currentURL}/login`);
            },
        },
    ];

    const logoutItems = [
        {
            label: '登出',
            onClick: () => {
                onJWTChange('');
            },
        },
    ];

    const menuItems = isLoggedin
        ? basicItems.concat(defaultItems).concat(logoutItems)
        : loginItems.concat(defaultItems);

    return (
        <div className="ui container">
            <Title title={t('profile.title')} />
            <Menu items={menuItems} />
        </div>
    );
}
