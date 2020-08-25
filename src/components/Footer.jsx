import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import FolderIcon from '@material-ui/icons/Folder';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import AccountIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
    root: {
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
        <div className={classes.root}>
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
        </div>
    );
}
