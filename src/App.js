import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import ProfilePage from './ProfilePage';
import MainPage from './MainPage';
import AssistantPage from './AssistantPage';
import DataPage from './DataPage';

const useStyles = makeStyles((theme) => ({
    app: {
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        maxHeight: '5vh',
        minHeight: '5vh',
    },
    footer: {
        maxHeight: '5vh',
        minHeight: '5vh',
    },
    main: {
        display: 'flex',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            minHeight: '90vh',
            maxHeight: '90vh',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    content: {
        [theme.breakpoints.up('lg')]: {
            overflowX: 'hidden',
            flexGrow: 6,
            order: 2,
        },
        [theme.breakpoints.down('md')]: {
            overflow: 'hidden',
            // minHeight: 'calc(100vh - 56px)',
            // maxHeight: 'calc(100vh - 56px)',
            order: 0,
        },
    },
    nav: {
        [theme.breakpoints.up('lg')]: {
            flex: 1,
            order: 1,
            // backgroundColor: 'DARKKHAKI',
        },
        [theme.breakpoints.down('md')]: {
            order: 0,
            position: 'fixed',
            bottom: 0,
            width: '100vw',
            // backgroundColor: 'GOLDENROD',
        },
    },
}));

const basename = process.env.PUBLIC_URL;
const routes = mount({
    '/': route({
        title: 'main',
        view: <MainPage />,
    }),
    '/data': route({
        title: 'Data',
        view: <DataPage />,
    }),
    '/assistant': route({
        title: 'Assistant',
        view: <AssistantPage />,
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
            <Header className={classes.header} />
            <div className={classes.main}>
                <Router routes={routes} basename={basename}>
                    <div className={classes.content}>
                        <View />
                    </div>
                    <div className={classes.nav}>
                        <Navigation basename={basename} />
                    </div>
                </Router>
            </div>
            <Footer className={classes.footer} />
        </div>
    );
}

export default App;
