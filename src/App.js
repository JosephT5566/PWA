import React from 'react';
import './i18n/i18n';
import { LoginStore } from './contexts/LoginContext';
import { UserStore } from './contexts/UserContext';

import useCheckCookie from './hooks/useCheckCookie';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './App.scss';

function App() {
    useCheckCookie();
    
    return (
        <div className="app">
            <LoginStore>
                <UserStore>
                    <Header />
                    <Main />
                    <Footer />
                </UserStore>
            </LoginStore>
        </div>
    );
}

export default App;
