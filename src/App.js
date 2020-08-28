import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

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

const basename = process.env.PUBLIC_URL;
const routes = mount({
    '/': route({
        title: 'main',
        view: <MainPage />,
    }),
    '/profile': route({
        title: 'profile',
        view: <ProfilePage />,
    }),
});

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Router routes={routes} basename={basename}>
                <div className={classes.content}>
                    <View />
                </div>
                <Navigation basename={basename} />
            </Router>
        </div>
    );
}

export default App;
