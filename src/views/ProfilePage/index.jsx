import React from 'react';
import { useNavigation } from 'react-navi';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';

import Title from '../../components/Title/Title';

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
    const { t } = useTranslation();
    const currentURL = navigation.getCurrentValue().url.pathname;

    const onNavigate = (e) => {
        navigation.navigate(`${currentURL}/${e.currentTarget.value}`);
    };

    return (
        <div>
            <Title title={t('profile.title')} />
            <Divider />
            <div className={classes.buttonsContainer}>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="basic" onClick={onNavigate}>
                        {t('profile.basic')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="upload" onClick={onNavigate}>
                        {t('profile.upload-kyc')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="doc" onClick={onNavigate}>
                        {t('profile.document')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="about" onClick={onNavigate}>
                        {t('profile.about')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="language" onClick={onNavigate}>
                        {t('profile.language')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
