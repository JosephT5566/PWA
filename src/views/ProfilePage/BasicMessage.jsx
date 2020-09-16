import React from 'react';
import { useTranslation } from 'react-i18next';

import TextField from '../../components/TextField';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyle = makeStyles(() => ({
    textFieldContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '1em 0',
    },
    contentContainer: {
        margin: '1em',
    },
}));

export default function BasicMessage() {
    const classes = useStyle();
    const { t } = useTranslation();
    const renderTextFields = () => {
        const labels = [
            { autoComplete: 'email', text: t('basic.email'), type: 'text' },
            { autoComplete: 'given-name', text: t('basic.first-name'), type: 'text' },
            { autoComplete: 'family-name', text: t('basic.last-name'), type: 'text' },
            { autoComplete: 'street-address', text: t('basic.address'), type: 'text' },
            { autoComplete: 'postal-code', text: t('basic.postal'), type: 'text' },
            { autoComplete: 'address-level1', text: t('basic.county'), type: 'text' },
            { autoComplete: 'address-level2', text: t('basic.city'), type: 'text' },
            { autoComplete: 'country-name', text: t('basic.country'), type: 'text' },
            { autoComplete: 'tel', text: t('basic.phone'), type: 'text' },
            { autoComplete: 'bday', text: t('basic.birthday'), type: 'date' },
        ];
        return labels.map((label, index) => (
            <TextField autoComplete={label.autoComplete} label={label.text} type={label.type} key={index} />
        ));
    };

    return (
        <div>
            <ArrowBackTitle title={t('basic.title')} />
            <Divider />
            <div className="ui container" style={{ padding: '1em 0' }}>
                <Alert variant="outlined" severity="warning">
                    <AlertTitle>{t('alert.warning')}</AlertTitle>
                    {t('basic.warning')}
                </Alert>
                <div className={classes.textFieldContainer}>{renderTextFields()}</div>
                <Button variant="contained" color="primary">
                    {t('basic.submit')}
                </Button>
            </div>
        </div>
    );
}
