import React, { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-navi';
import _ from 'lodash';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import Button from '../../components/Button';
import TextInput from '../../components/CustomInput/TextInput';
import PasswordInput from '../../components/CustomInput/PasswordInput';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import { mockService } from '../../apis/mock';
import { login } from '../../apis/LoginAPI';

import './styles.scss';

export default function Login() {
    const [username, setUsername] = useState('joseph');
    const [password, setPassword] = useState('123456');
    const [open, setOpen] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const navigation = useNavigation();
    const { t } = useTranslation();

    const handleShowSnackbar = () => {
        setOpen(true);
    };

    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const onClickLogin = async () => {
        setIsSubmit(true);
        setTimeout(() => {
            setIsSubmit(false);
        }, 10);

        try {
            if (_.isEmpty(username) || _.isEmpty(password)) {
                throw new Error();
            }

            // isLoggedin = await mockService.login(username, password);
            const response = await login(username, password);
            if (response.ok) {
                navigation.goBack();
            } else {
                throw new Error(t('alert.login-fail'));
            }
        } catch (error) {
            handleShowSnackbar();
        }
    };

    return (
        <div className="ui container">
            <ArrowBackTitle title={t('login.log-in')} />
            <div className="lv2">
                <TextInput
                    label={t('login.username')}
                    type={'text'}
                    required={true}
                    value={username}
                    handleChange={(value) => setUsername(value)}
                    isSubmit={isSubmit}
                    onKeyPress={({ key }) => {
                        if (key === 'Enter') onClickLogin();
                    }}
                />
                <PasswordInput
                    label={t('login.password')}
                    required={true}
                    value={password}
                    handleChange={(value) => setPassword(value)}
                    isSubmit={isSubmit}
                    onKeyPress={({ key }) => {
                        if (key === 'Enter') onClickLogin();
                    }}
                />
                <Button onClick={onClickLogin} label={t('login.log-in')}></Button>
                <Snackbar
                    className="snackbar"
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    onClose={handleCloseSnackbar}
                    TransitionComponent={Slide}
                    message={t('login.login-alert')}
                />
            </div>
        </div>
    );
}
