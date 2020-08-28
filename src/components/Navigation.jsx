import React from 'react';
import { useNavigation } from 'react-navi';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
    nav: {
        [theme.breakpoints.up('lg')]: {
            flex: 1,
            order: 1,
            // backgroundColor: 'DARKKHAKI',
        },
        [theme.breakpoints.down('md')]: {
            order: 0,
            // backgroundColor: 'GOLDENROD',
        },
    },
}));

export default function Navigator({ basename }) {
    const classes = useStyles();
    const navigation = useNavigation();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.nav}>
            <Hidden mdDown>
                <List>
                    <ListItem button onClick={() => navigation.navigate(`${basename}/`)}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="home" />
                    </ListItem>
                    <ListItem button onClick={() => navigation.navigate(`${basename}/profile`)}>
                        <ListItemIcon>
                            <AccountIcon />
                        </ListItemIcon>
                        <ListItemText primary="profile" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <DataUsageIcon />
                        </ListItemIcon>
                        <ListItemText primary="Data" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AssistantIcon />
                        </ListItemIcon>
                        <ListItemText primary="Assistant" />
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
                    <BottomNavigationAction label="Data" value="data" icon={<DataUsageIcon />} />
                    <BottomNavigationAction label="Assistant" value="assistant" icon={<AssistantIcon />} />
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
