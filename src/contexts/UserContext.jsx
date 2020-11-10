import React, { useState, useEffect, useContext } from 'react';
import JWT from 'jsonwebtoken';

import LoginContext from './LoginContext';
import { getUser } from '../apis/UserAPI';
import { USER_TYPE, KEY } from '../assets/types';

const Context = React.createContext(''); // default value

export function UserStore(props) {
    const { jwt, isLoggedin } = useContext(LoginContext);
    const [user, setUser] = useState({});

    const fetchUser = async () => {
        const userID = JWT.verify(jwt, KEY).userID;
        const response = await getUser(userID);
        const _user = await response.json();
        setUser(_user);
    };

    useEffect(() => {
        if (isLoggedin === true) {
            fetchUser();
        }
        if (isLoggedin === false) setUser({});
    }, [isLoggedin]);

    useEffect(() => {
        // console.log('user in context',user);
    }, [user]);

    const refetchUser = async () => await fetchUser();

    return <Context.Provider value={{ user, refetchUser }}>{props.children}</Context.Provider>;
}

export default Context;
