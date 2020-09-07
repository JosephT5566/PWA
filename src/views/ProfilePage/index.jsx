import React from 'react';

import Title from '../../components/Title/Title';

import { useNavigation } from 'react-navi';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    button: {
        display: 'flex',
        padding: '5px 5% 5px 5%',
        justifyItems: 'center',
        justifyContent: 'center',
    },
    title: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('lg')]: {
            alignItems: 'left',
        },
        [theme.breakpoints.down('md')]: {
            alignItems: 'center',
        },
    },
}));

export default function ProfilePage() {
    const classes = useStyles();
    const navigation = useNavigation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const onNavigate = (e) => {
        navigation.navigate(`${currentURL}/${e.currentTarget.value}`);
    };

    return (
        <div>
            <Title title="Profile" />
            <Divider />
            <div className={classes.buttonsContainer}>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="basic" onClick={onNavigate}>
                        Basic message
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="upload" onClick={onNavigate}>
                        Upload KYC
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="doc" onClick={onNavigate}>
                        Private and term doc
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="about" onClick={onNavigate}>
                        About us
                    </Button>
                </div>
            </div>
        </div>
    );
}
