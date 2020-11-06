import React, { useEffect, useState } from 'react';
import JWT from 'jsonwebtoken';
const Context = React.createContext(''); // default value

export function LoginStore(props) {
    const [jwt, setJWT] = useState('');
    const [isLoggedin, setIsLoggenin] = useState(false);
    const onJWTChange = (jwt) => setJWT(jwt);

    // useEffect(() => {
    //     console.log('isLoggedin: ', isLoggedin);
    //     console.log('userID: ', userID);
    // }, [userID]);

    useEffect(() => {
        console.log('jwt is set');
        try {
            JWT.verify(jwt, 'secret');
            setIsLoggenin(true);
        } catch (error) {
            setIsLoggenin(false);
        }
    }, [jwt]);

    return <Context.Provider value={{ jwt, isLoggedin, onJWTChange }}>{props.children}</Context.Provider>;
}

export default Context;
