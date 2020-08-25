import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route } from 'react-router-dom';

import Footer from './components/Footer';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';

let history = createBrowserHistory();

function App() {
    return (
        <div className="App">
            <Router history={history}>
                <Route path="/profile-page" component={ProfilePage} />
                <Route path="/" exact component={MainPage} />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
