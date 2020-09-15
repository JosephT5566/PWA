import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router, View } from 'react-navi';
import Grid from '@material-ui/core/Grid';
import HelmetProvider from 'react-navi-helmet-async';
import './i18n';

import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

const useStyles = makeStyles((theme) => ({
    app: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            minHeight: 'calc(100vh - 4em)', // minus nav height
            marginBottom: '4em', // nav height
            paddingBottom: '3em', // footer height
        },
    },
    header: {
        maxHeight: '7vh',
        minHeight: '7vh',
    },
    footer: {
        maxHeight: '7vh',
        minHeight: '7vh',
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            bottom: '0',
            width: '100vw',
            zIndex: '-1',
        },
    },
    main: {
        display: 'flex',
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            minHeight: '86vh',
            maxHeight: '86vh',
        },
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    },
    content: {
        height: '100%',
        [theme.breakpoints.up('lg')]: {
            overflowX: 'hidden',
            flexGrow: 6,
            order: 2,
        },
        [theme.breakpoints.down('md')]: {
            overflow: 'hidden',
            order: 0,
        },
    },
    nav: {
        [theme.breakpoints.up('lg')]: {
            height: '100%',
            flex: 1,
            order: 1,
            // backgroundColor: 'DARKKHAKI',
        },
        [theme.breakpoints.down('md')]: {
            position: 'fixed',
            bottom: 0,
            width: '100vw',
            zIndex: 100,
            // backgroundColor: 'GOLDENROD',
        },
    },
}));

const basename = process.env.PUBLIC_URL;

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.main}>
                <HelmetProvider>
                    <Router routes={routes} basename={basename}>
                        <Grid container>
                            <Grid className={classes.nav} item lg={2} xs={12}>
                                <Navigation basename={basename} />
                            </Grid>
                            <Grid className={classes.content} item lg={10} xs={12}>
                                <Suspense fallback={null}>
                                    <View />
                                </Suspense>
                            </Grid>
                        </Grid>
                    </Router>
                </HelmetProvider>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
}

export default App;
