import React, { Suspense } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import Grid from '@material-ui/core/Grid';

import routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

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
            order: 0,
            position: 'fixed',
            bottom: 0,
            width: '100vw',
            // backgroundColor: 'GOLDENROD',
        },
    },
}));

const basename = process.env.PUBLIC_URL;

function App() {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Header className={classes.header} />
            <div className={classes.main}>
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
            </div>
            <Footer className={classes.footer} />
        </div>
    );
}

export default App;
