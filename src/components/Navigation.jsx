import React from 'react';
import { useNavigation } from 'react-navi';
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
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
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
                        <ListItemText primary="home" />
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
                        <ListItemText primary="Data" />
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
                        <ListItemText primary="Assistant" />
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
                        <ListItemText primary="profile" />
                    </ListItem>
                </List>
            </Hidden>
            <Hidden lgUp>
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/`)}
                        label="Home"
                        value="home"
                        icon={<HomeIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/data`)}
                        label="Data"
                        value="data"
                        icon={<DataUsageIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/assistant`)}
                        label="Assistant"
                        value="assistant"
                        icon={<AssistantIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => navigation.navigate(`${basename}/profile`)}
                        label="Profile"
                        value="profile"
                        icon={<AccountIcon />}
                    />
                </BottomNavigation>
            </Hidden>
        </div>
    );
}
