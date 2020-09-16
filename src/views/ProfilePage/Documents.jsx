import React from 'react';
import { useTranslation } from 'react-i18next';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

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
}));

export default function TermDoc() {
    const classes = useStyles();
    const { t } = useTranslation();

    const onClickDownload = (e) => {
        console.log(e.target.value);
    };

    return (
        <div>
            <ArrowBackTitle title={t('documents.title')} />
            <Divider />
            <div className={classes.buttonsContainer}>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="basic" onClick={onClickDownload}>
                        {t('documents.terms')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="upload" onClick={onClickDownload}>
                        {t('documents.private-policy')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="doc" onClick={onClickDownload}>
                    {t('documents.anti-fraud-policy')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="about" onClick={onClickDownload}>
                    {t('documents.income-disclaimer')}
                    </Button>
                </div>
                <div className={classes.button}>
                    <Button variant="contained" fullWidth value="about" onClick={onClickDownload}>
                    {t('documents.consent')}
                    </Button>
                </div>
            </div>
        </div>
    );
}
