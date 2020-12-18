import React, { useState } from 'react';

const Context = React.createContext(''); // default value

export function LoginStore(props) {
    const [isLoggedin, setIsLoggedin] = useState(false);
    const onChangeLogin = (loginState) => setIsLoggedin(loginState);

    return <Context.Provider value={{ isLoggedin, onChangeLogin }}>{props.children}</Context.Provider>;
}

export default Context;
