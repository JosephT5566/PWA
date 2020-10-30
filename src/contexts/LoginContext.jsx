import React, {
    // useEffect,
    useState,
} from 'react';
const Context = React.createContext(''); // default value

export function LoginStore(props) {
    const [jwt, setJWT] = useState('');
    const onJWTChange = (jwt) => setJWT(jwt);
    const isLoggedin = jwt === '' ? false : true;

    // useEffect(() => {
    //     console.log('isLoggedin: ', isLoggedin);
    //     console.log('userID: ', userID);
    // }, [userID]);

    return <Context.Provider value={{ jwt, isLoggedin, onJWTChange }}>{props.children}</Context.Provider>;
}

export default Context;
