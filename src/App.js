import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './components/Navigation';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';

const useStyles = makeStyles((theme) => ({
    app: {
        display: 'flex',
        height: '100vh',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    content: {
        [theme.breakpoints.up('lg')]: {
            flexGrow: 6,
            order: 2,
        },
        [theme.breakpoints.down('md')]: {
            minHeight: 'calc(100vh - 56px)',
            maxHeight: 'calc(100vh - 56px)',
            order: 0,
        },
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className={classes.content}>
                    <Switch>
                        <Route path="/" exact component={MainPage} />
                        <Route path="/profile-page" component={ProfilePage} />
                        <Route component={() => <div>404 Not found </div>} />
                    </Switch>
                </div>
                <Navigation />
            </BrowserRouter>
        </div>
    );
}

export default App;
