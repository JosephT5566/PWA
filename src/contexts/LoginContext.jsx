import React, { useState } from 'react';
const Context = React.createContext(''); // default value

export function LoginStore(props) {
    const [username, setUsername] = useState('');
    const onUsernameChange = (username) => setUsername(username);
    const isLoggedin = username === '' ? false : true;

    return <Context.Provider value={{ username, isLoggedin, onUsernameChange }}>{props.children}</Context.Provider>;
}

export default Context;
