import React from 'react';
import './i18n';
import { LoginStore } from './contexts/LoginContext';
import { UserStore } from './contexts/UserContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './App.scss';

function App() {
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
