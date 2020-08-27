import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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

export default function Navigator() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.nav}>
            <Hidden mdDown>
                <List>
                    <ListItem button onClick={() => history.push('/')}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="home" />
                    </ListItem>
                    <ListItem button onClick={() => history.push('/profile-page')}>
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
                        onClick={() => history.push('/')}
                        label="Home"
                        value="home"
                        icon={<HomeIcon />}
                    />
                    <BottomNavigationAction
                        onClick={() => history.push('/profile-page')}
                        label="Profile"
                        value="profile"
                        icon={<AccountIcon />}
                    />
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
                    <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
                </BottomNavigation>
            </Hidden>
        </div>
    );
}
