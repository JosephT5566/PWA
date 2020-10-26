import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import LoginContext from '../../contexts/LoginContext';

import TextInput from '../../components/CustomInput/TextInput';
import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import PhotoUpload from '../../components/PhotoUpload';
import Tooltip from '../../components/Tooltip';
import Button from '../../components/Button';

import { Alert, AlertTitle } from '@material-ui/lab';

import { BACKEND_URL, USER_TYPE } from '../../assets/types';
import './styles.scss';

export default function BasicMessage() {
    const [user, setUser] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const { userID } = useContext(LoginContext);
    const { t } = useTranslation();

    useEffect(() => {
        const getUser = async () => {
            const response = await fetch(`${BACKEND_URL}/users/${userID}`);
            if (response.status === 200) {
                const _user = await response.json();
                setUser(_user);
            }
        };
        getUser();
    }, [userID]);

    useEffect(() => {
        console.log(user);
    }, [user]);

    const renderInputs = () => {
        return (
            <>
                <TextInput
                    autoComplete={'email'}
                    label={t('basic.email')}
                    type={'text'}
                    value={user[USER_TYPE.email]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.email]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'given-name'}
                    label={t('basic.first-name')}
                    type={'text'}
                    value={user[USER_TYPE.firstname]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.firstname]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'family-name'}
                    label={t('basic.last-name')}
                    type={'text'}
                    value={user[USER_TYPE.lastname]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.lastname]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'street-address'}
                    label={t('basic.address')}
                    type={'text'}
                    value={user[USER_TYPE.address]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.address]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'postal-code'}
                    label={t('basic.postal')}
                    type={'text'}
                    value={user[USER_TYPE.postal]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.postal]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'address-level1'}
                    label={t('basic.county')}
                    type={'text'}
                    value={user[USER_TYPE.county]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.county]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'address-level2'}
                    label={t('basic.city')}
                    type={'text'}
                    value={user[USER_TYPE.city]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.city]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'country-name'}
                    label={t('basic.country')}
                    type={'text'}
                    value={user[USER_TYPE.country]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.country]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'tel'}
                    label={t('basic.phone')}
                    type={'text'}
                    value={user[USER_TYPE.phone]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.phone]: value })}
                    required={true}
                    isSubmit={isSubmit}
                />
                <TextInput
                    autoComplete={'bday'}
                    label={t('basic.birthday')}
                    type={'date'}
                    value={user[USER_TYPE.birth]}
                    handleChange={(value) => setUser({ ...user, [USER_TYPE.birth]: value })}
                    required={true}
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
            await fetch(`${BACKEND_URL}/users/${userID}`, {
                method: 'PUT',
                body: JSON.stringify(user),
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
            });
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
                />
                <PhotoUpload
                    className="photoupload"
                    title={t('basic.back')}
                    required={true}
                    value={user[USER_TYPE.govIDBackImg]}
                    handleChange={(picture) => setUser({ ...user, [USER_TYPE.govIDBackImg]: picture })}
                    isSubmit={isSubmit}
                />
                <Button label={t('basic.submit')} onClick={onSubmit} />
            </div>
        </div>
    );
}
