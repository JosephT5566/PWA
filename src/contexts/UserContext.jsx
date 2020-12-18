import React, { useState, useEffect, useContext } from 'react';
import JWT from 'jsonwebtoken';
import Cookie from 'js-cookie';
import { useTranslation } from 'react-i18next';

import LoginContext from './LoginContext';
import { getUser } from '../apis/UserAPI';
import { KEY, COOKIES } from '../assets/types';

const Context = React.createContext(''); // default value

export function UserStore(props) {
    const { isLoggedin } = useContext(LoginContext);
    const { t } = useTranslation();
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        try {
            const jwt = Cookie.get(COOKIES.jwt);
            const userID = JWT.verify(jwt, KEY).userID;
            const response = await getUser(userID);
            if (response.ok) {
                const _user = await response.json();
                setUser(_user);
            } else {
                throw new Error(t('alert.fetch-fail') + ': ' + response.status);
            }
        } catch (error) {
            window.alert(error);
        }
    };

    useEffect(() => {
        if (isLoggedin) {
            fetchUser();
        } else {
            setUser({});
        }
    }, [isLoggedin]);

    const onChangeUser = (newUser) => setUser(newUser);

    return <Context.Provider value={{ user, onChangeUser }}>{props.children}</Context.Provider>;
}

export default Context;
