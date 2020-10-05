import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CustomInput from '../../components/CustomInput';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import PhotoUpload from '../../components/PhotoUpload';
import Tooltip from '../../components/Tooltip';
import Button from '../../components/Button';

import { Alert, AlertTitle } from '@material-ui/lab';

import './styles.scss';

const init_data = {
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    postal: '',
    county: '',
    city: '',
    country: '',
    phone: '',
    birthday: '',
    frontPhoto: null,
    backPhoto: null,
};

export default function BasicMessage() {
    const [data, setData] = useState(init_data);
    const [isSubmit, setIsSubmit] = useState(false);
    const { t } = useTranslation();

    const renderTextFields = () => {
        const labels = [
            {
                autoComplete: 'email',
                text: t('basic.email'),
                type: 'text',
                getValue: (value) => setData({ ...data, email: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'given-name',
                text: t('basic.first-name'),
                type: 'text',
                getValue: (value) => setData({ ...data, firstName: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'family-name',
                text: t('basic.last-name'),
                type: 'text',
                getValue: (value) => setData({ ...data, lastName: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'street-address',
                text: t('basic.address'),
                type: 'text',
                getValue: (value) => setData({ ...data, address: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'postal-code',
                text: t('basic.postal'),
                type: 'text',
                getValue: (value) => setData({ ...data, postal: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'address-level1',
                text: t('basic.county'),
                type: 'text',
                getValue: (value) => setData({ ...data, county: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'address-level2',
                text: t('basic.city'),
                type: 'text',
                getValue: (value) => setData({ ...data, city: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'country-name',
                text: t('basic.country'),
                type: 'text',
                getValue: (value) => setData({ ...data, country: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'tel',
                text: t('basic.phone'),
                type: 'text',
                getValue: (value) => setData({ ...data, phone: value }),
                required: true,
                isSubmit: isSubmit,
            },
            {
                autoComplete: 'bday',
                text: t('basic.birthday'),
                type: 'date',
                getValue: (value) => setData({ ...data, birthday: value }),
                required: true,
                isSubmit: isSubmit,
            },
        ];

        return labels.map((label, index) => (
            <CustomInput
                autoComplete={label.autoComplete}
                label={label.text}
                type={label.type}
                getValue={label.getValue}
                required={label.required}
                isSubmit={isSubmit}
                key={index}
            />
        ));
    };

    const isDataAllFilled = () => {
        for (let item in data) {
            if (data[item] === '' || data[item] === null) return false;
        }
        return true;
    };

    const onSubmit = () => {
        setIsSubmit(true);
        setTimeout(() => {
            setIsSubmit(false);
        }, 50);
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
                <h3>{t('basic.front')}</h3>
                <PhotoUpload />
                <h3>{t('basic.back')}</h3>
                <PhotoUpload />
                <Button label={t('basic.submit')} onClick={onSubmit} />
            </div>
        </div>
    );
}
