import React, { useContext, useState } from 'react';
import { NIL as UUID_NIL } from 'uuid';
import LoginContext from '../../contexts/LoginContext';
import { useTranslation } from 'react-i18next';
import { useNavigation } from 'react-navi';

import ArrowBackTitle from '../../components/Title/ArrowBackTitle';
import Button from '../../components/Button';
import TextInput from '../../components/CustomInput/TextInput';
import PasswordInput from '../../components/CustomInput/PasswordInput';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

import { mockService } from '../../apis/mock';

import './styles.scss';

export default function Login() {
    const [username, setUsername] = useState('joseph');
    const [password, setPassword] = useState('123456');
    const [open, setOpen] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);
    const { onUserIDChange } = useContext(LoginContext);
    const navigation = useNavigation();
    const { t } = useTranslation();

    const handleShowSnackbar = () => {
        setOpen(true);
    };

    const handleCloseSnackbar = () => {
        setOpen(false);
    };

    const postData = async (url, data) => {
        const response = await fetch(url, {
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            method: 'POST',
            mode: 'cors',
        });
        return response;
    };

    const onClickLogin = async () => {
        let isLoggedin = false;
        let userID = '';
        setIsSubmit(true);
        setTimeout(() => {
            setIsSubmit(false);
        }, 10);
        if (username === '' || password === '') return;

        // isLoggedin = await mockService.login(username, password);
        let response = await postData('http://localhost:9527/login', { username: username, password: password });

        if (response.status === 200) {
            userID = await response.json();
            if (userID !== UUID_NIL) {
                isLoggedin = true;
            }
        }

        if (isLoggedin) {
            onUserIDChange(userID);
            navigation.goBack();
        } else {
            handleShowSnackbar();
        }
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
