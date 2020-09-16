import React from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';

import Title from '../../components/Title/Title';

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: '0.5em 0',
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
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const onNavigate = (e) => {
        navigation.navigate(`${currentURL}/${e.currentTarget.value}`);
    };

    return (
        <div>
            <Title title={t('profile.title')} />
            <Divider />
            <div className="ui container" style={{ padding: '1em 0' }}>
                <Button className={classes.button} variant="contained" fullWidth value="basic" onClick={onNavigate}>
                    {t('profile.basic')}
                </Button>
                <Button className={classes.button} variant="contained" fullWidth value="upload" onClick={onNavigate}>
                    {t('profile.upload-kyc')}
                </Button>
                <Button className={classes.button} variant="contained" fullWidth value="doc" onClick={onNavigate}>
                    {t('profile.document')}
                </Button>
                <Button className={classes.button} variant="contained" fullWidth value="about" onClick={onNavigate}>
                    {t('profile.about')}
                </Button>
                <Button className={classes.button} variant="contained" fullWidth value="language" onClick={onNavigate}>
                    {t('profile.language')}
                </Button>
            </div>
        </div>
    );
}
