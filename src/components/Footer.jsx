import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Hidden from '@material-ui/core/Hidden';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    drewer: {
        width: 140,
    },
    bottomNavigation: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
});

export default function Footer() {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <Hidden mdDown>
                <Drawer className={classes.drewer} variant="permanent" anchor="left">
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
                </Drawer>
            </Hidden>
            <Hidden lgUp>
                <BottomNavigation className={classes.bottomNavigation} value={value} onChange={handleChange}>
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
