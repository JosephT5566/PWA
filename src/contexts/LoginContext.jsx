import React, {
    // useEffect,
    useState,
} from 'react';
const Context = React.createContext(''); // default value

export function LoginStore(props) {
    const [userID, setUserID] = useState('');
    const onUserIDChange = (userID) => setUserID(userID);
    const isLoggedin = userID === '' ? false : true;

    // useEffect(() => {
    //     console.log('isLoggedin: ', isLoggedin);
    //     console.log('userID: ', userID);
    // }, [userID]);

    return <Context.Provider value={{ userID, isLoggedin, onUserIDChange }}>{props.children}</Context.Provider>;
}

export default Context;
