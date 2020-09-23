import React from 'react';
import './i18n';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import './App.scss';

function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
