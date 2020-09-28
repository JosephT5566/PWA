import React, { useState } from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';
import { CurrentIndexStore } from './Context';

import Button from './Button';
import AssistantIcon from '@material-ui/icons/Assistant';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';

import './styles.scss';

export default function Navigator({ basename }) {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [value, setValue] = useState('home');

    return (
        <nav id="navigation">
            <div className="itemsContainer">
                <CurrentIndexStore>
                    <Button
                        index={1}
                        onClick={() => {
                            navigation.navigate(`${basename}/`);
                        }}
                    >
                        <HomeIcon className="icon" />
                        {t('navigation.home')}
                    </Button>
                    <Button
                        index={2}
                        onClick={() => {
                            navigation.navigate(`${basename}/data`);
                        }}
                    >
                        <DataUsageIcon className="icon" />
                        {t('navigation.data')}
                    </Button>
                    <Button
                        index={3}
                        onClick={() => {
                            navigation.navigate(`${basename}/assistant`);
                        }}
                    >
                        <AssistantIcon className="icon" />
                        {t('navigation.assistant')}
                    </Button>
                    <Button
                        index={4}
                        onClick={() => {
                            navigation.navigate(`${basename}/profile`);
                        }}
                    >
                        <AccountIcon className="icon" />
                        {t('navigation.profile')}
                    </Button>
                </CurrentIndexStore>
            </div>
        </nav>
    );
}
