import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import TextInput from '../../components/CustomInput/TextInput';
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
    frontPhoto: '',
    backPhoto: '',
};

export default function BasicMessage() {
    const [data, setData] = useState(init_data);
    const [isSubmit, setIsSubmit] = useState(false);
    const { t } = useTranslation();

    const renderInputs = () => {
        return (
            <>
                <TextInput
                    autoComplete={'email'}
                    label={t('basic.email')}
                    type={'text'}
                    value={data.email}
                    handleChange={(value) => setData({ ...data, email: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'given-name'}
                    label={t('basic.first-name')}
                    type={'text'}
                    value={data.firstName}
                    handleChange={(value) => setData({ ...data, firstName: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'family-name'}
                    label={t('basic.last-name')}
                    type={'text'}
                    value={data.lastName}
                    handleChange={(value) => setData({ ...data, lastName: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'street-address'}
                    label={t('basic.address')}
                    type={'text'}
                    value={data.address}
                    handleChange={(value) => setData({ ...data, address: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'postal-code'}
                    label={t('basic.postal')}
                    type={'text'}
                    value={data.postal}
                    handleChange={(value) => setData({ ...data, postal: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'address-level1'}
                    label={t('basic.county')}
                    type={'text'}
                    value={data.county}
                    handleChange={(value) => setData({ ...data, county: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'address-level2'}
                    label={t('basic.city')}
                    type={'text'}
                    value={data.city}
                    handleChange={(value) => setData({ ...data, city: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'country-name'}
                    label={t('basic.country')}
                    type={'text'}
                    value={data.country}
                    handleChange={(value) => setData({ ...data, country: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'tel'}
                    label={t('basic.phone')}
                    type={'text'}
                    value={data.phone}
                    handleChange={(value) => setData({ ...data, phone: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'bday'}
                    label={t('basic.birthday')}
                    type={'date'}
                    value={data.birthday}
                    handleChange={(value) => setData({ ...data, birthday: value })}
                    required={true}
                    isSubmit={isSubmit}
                    placeholder={'yyyy-mm-dd'}
                />
            </>
        );
    };

    const isAllRequiredDataFilled = () => {
        for (let item in data) {
            if (data[item] === '' || data[item] === null) return false;
        }
        return true;
    };

    const onSubmit = () => {
        console.log(data);
        setIsSubmit(true);
        if (isAllRequiredDataFilled()) {
            // do something
        }
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
                {renderInputs()}
                <div className="title">
                    <h2>{t('basic.upload-id-card')}</h2>
                    <Tooltip label={t('basic.hint')} />
                </div>
                <PhotoUpload
                    className="photoupload"
                    title={t('basic.front')}
                    required={true}
                    value={data.frontPhoto}
                    handleChange={(picture) => setData({ ...data, frontPhoto: picture })}
                    isSubmit={isSubmit}
                />
                <PhotoUpload
                    className="photoupload"
                    title={t('basic.back')}
                    required={true}
                    value={data.backPhoto}
                    handleChange={(picture) => setData({ ...data, backPhoto: picture })}
                    isSubmit={isSubmit}
                />
                <Button label={t('basic.submit')} onClick={onSubmit} />
            </div>
        </div>
    );
}
