import React from 'react';
import { useTranslation } from 'react-i18next';

import CustomInput from '../../components/CustomInput';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import PhotoUpload from '../../components/PhotoUpload';
import Tooltip from '../../components/Tooltip';
import Button from '../../components/Button';

import { Alert, AlertTitle } from '@material-ui/lab';

import './styles.scss';

export default function BasicMessage() {
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
            <CustomInput autoComplete={label.autoComplete} label={label.text} type={label.type} key={index} />
        ));
    };

    return (
        <div className="ui container">
            <ArrowBackTitle title={t('basic.title')} />
            <div className="container lv2">
                <div className="alert">
                    <Alert variant="outlined" severity="warning">
                        <AlertTitle>{t('alert.warning')}</AlertTitle>
                        {t('basic.warning')}
                    </Alert>
                </div>
                {renderTextFields()}
                <div className="title">
                    <h2>{t('basic.upload-header')}</h2>
                    <Tooltip label={t('basic.hint')} />
                </div>
                <PhotoUpload />
                <Button label={t('basic.submit')} />
            </div>
        </div>
    );
}
