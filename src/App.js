import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Footer from './components/Footer';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';

function App() {
    return (
        <div className="App">
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/profile-page" component={ProfilePage} />
                    <Route component={() => <div>404 Not found </div>} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
