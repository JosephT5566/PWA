import React, { useContext, useState } from 'react';
import LoginContext from '../../contexts/LoginContext';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-navi';
import sha1 from 'crypto-js/sha1';

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
    const { onJWTChange } = useContext(LoginContext);
    const navigation = useNavigation();
    const { t } = useTranslation();

    const handleShowSnackbar = () => {
        setOpen(true);
    };

    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const onClickLogin = async () => {
        let jwt = null;

        setIsSubmit(true);
        setTimeout(() => {
            setIsSubmit(false);
        }, 10);
        if (username === '' || password === '') return;

        // isLoggedin = await mockService.login(username, password);
        const response = await login({ username: username, password: sha1(password).toString() });
        if (response.status === 200) {
            jwt = await response.json();
            onJWTChange(jwt);

            navigation.goBack();
            return;
        }
        handleShowSnackbar();
    };

    return (
        <div className="ui container">
            <ArrowBackTitle title="登入" />
            <div className="lv2">
                <TextInput
                    label="使用者"
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
                    label="密碼"
                    required={true}
                    value={password}
                    handleChange={(value) => setPassword(value)}
                    isSubmit={isSubmit}
                    onKeyPress={({ key }) => {
                        if (key === 'Enter') onClickLogin();
                    }}
                />
                <Button onClick={onClickLogin} label="登入"></Button>
                <Snackbar
                    className="snackbar"
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={open}
                    onClose={handleCloseSnackbar}
                    TransitionComponent={Slide}
                    message="帳號或密碼錯誤"
                />
            </div>
        </div>
    );
}
