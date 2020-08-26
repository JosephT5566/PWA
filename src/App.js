import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Footer from './components/Footer';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';

const useStyles = makeStyles({
    app: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Footer />
                <div className={classes.content}>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/profile-page" component={ProfilePage} />
                        <Route component={() => <div>404 Not found </div>} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
