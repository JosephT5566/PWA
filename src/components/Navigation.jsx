import React from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';

import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';
import AssistantIcon from '@material-ui/icons/Assistant';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';

export default function Navigator({ basename }) {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [value, setValue] = React.useState('home');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <nav>
            <Hidden mdDown>
                <List>
                    <ListItem
                        button
                        onClick={() => {
                            navigation.navigate(`${basename}/`);
                            setValue('home');
                        }}
                    >
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('navigation.home')} />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            navigation.navigate(`${basename}/data`);
                            setValue('data');
                        }}
                    >
                        <ListItemIcon>
                            <DataUsageIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('navigation.data')} />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            navigation.navigate(`${basename}/assistant`);
                            setValue('assistant');
                        }}
                    >
                        <ListItemIcon>
                            <AssistantIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('navigation.assistant')} />
                    </ListItem>
                    <ListItem
                        button
                        onClick={() => {
                            navigation.navigate(`${basename}/profile`);
                            setValue('profile');
                        }}
                    >
                        <ListItemIcon>
                            <AccountIcon />
                        </ListItemIcon>
                        <ListItemText primary={t('navigation.profile')} />
                    </ListItem>
                </List>
            </Hidden>
            <Hidden lgUp>
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/`)}
                        label={t('navigation.home')}
                        value="home"
                        icon={<HomeIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/data`)}
                        label={t('navigation.data')}
                        value="data"
                        icon={<DataUsageIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/assistant`)}
                        label={t('navigation.assistant')}
                        value="assistant"
                        icon={<AssistantIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/profile`)}
                        label={t('navigation.profile')}
                        value="profile"
                        icon={<AccountIcon />}
                    />
                </BottomNavigation>
            </Hidden>
        </nav>
    );
}
