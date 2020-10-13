import React from 'react';
import './i18n';
import { LoginStore } from './contexts/LoginContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './App.scss';

function App() {
    return (
        <div className="app">
            <LoginStore>
                <Header />
                <Main />
                <Footer />
            </LoginStore>
        </div>
    );
}

export default App;
