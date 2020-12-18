import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import UserContext from '../../contexts/UserContext';
import TextInput from '../../components/CustomInput/TextInput';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import PhotoUpload from '../../components/PhotoUpload';
import Tooltip from '../../components/Tooltip';
import Button from '../../components/Button';

import { Alert, AlertTitle } from '@material-ui/lab';

import { updateUser } from '../../apis/UserAPI';
import { USER_TYPE } from '../../assets/types';
import './styles.scss';

export default function BasicMessage() {
    const [user, setUser] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { user: contextUser, refetchUser } = useContext(UserContext);
    const { t } = useTranslation();

    useEffect(() => {
        if (!_.isEmpty(contextUser)) setUser(contextUser);
    }, [contextUser]);

    const renderInputs = () => {
        return (
            <>
                <TextInput
                    label={t('basic.username')}
                    type={'text'}
                    value={user[USER_TYPE.username]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.username]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'email'}
                    label={t('basic.email')}
                    type={'text'}
                    value={user[USER_TYPE.email]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.email]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'given-name'}
                    label={t('basic.first-name')}
                    type={'text'}
                    value={user[USER_TYPE.firstname]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.firstname]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'family-name'}
                    label={t('basic.last-name')}
                    type={'text'}
                    value={user[USER_TYPE.lastname]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.lastname]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'street-address'}
                    label={t('basic.address')}
                    type={'text'}
                    value={user[USER_TYPE.address]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.address]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'postal-code'}
                    label={t('basic.postal')}
                    type={'text'}
                    value={user[USER_TYPE.postal]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.postal]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'address-level1'}
                    label={t('basic.county')}
                    type={'text'}
                    value={user[USER_TYPE.county]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.county]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'address-level2'}
                    label={t('basic.city')}
                    type={'text'}
                    value={user[USER_TYPE.city]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.city]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'country-name'}
                    label={t('basic.country')}
                    type={'text'}
                    value={user[USER_TYPE.country]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.country]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'tel'}
                    label={t('basic.phone')}
                    type={'text'}
                    value={user[USER_TYPE.phone]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.phone]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'bday'}
                    label={t('basic.birthday')}
                    type={'date'}
                    value={user[USER_TYPE.birth]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.birth]: value })}
                    required={true}
                    disabled={true}
                    isSubmit={isSubmit}
                    placeholder={'yyyy-mm-dd'}
                />
            </>
        );
    };

    const isAllRequiredDataFilled = () => {
        for (let item in user) {
            if (user[item] === '') return false;
        }
        return true;
    };

    const onSubmit = async () => {
        console.log(user);
        setIsSubmit(true);
        if (isAllRequiredDataFilled()) {
            try {
                const response = await updateUser(user[USER_TYPE.id], user);
                if (!response.ok) {
                    throw new Error(t('alert.submit-fail') + ': ' + response.status);
                }
            } catch (error) {
                window.alert(error);
            }
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
                    value={user[USER_TYPE.govIDFrontImg]}
                    handleChange={(picture) => setUser({ ...user, [USER_TYPE.govIDFrontImg]: picture })}
                    isSubmit={isSubmit}
                    disable={true}
                />
                <PhotoUpload
                    className="photoupload"
                    title={t('basic.back')}
                    required={true}
                    value={user[USER_TYPE.govIDBackImg]}
                    handleChange={(picture) => setUser({ ...user, [USER_TYPE.govIDBackImg]: picture })}
                    isSubmit={isSubmit}
                    disable={true}
                />
                {/* <Button label={t('basic.submit')} onClick={onSubmit} /> */}
            </div>
        </div>
    );
}
