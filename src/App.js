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

import './App.scss';

const basename = process.env.PUBLIC_URL;

function App() {
    return (
        <div className="app">
            <Header />
            <div className="main">
                <HelmetProvider>
                    <Router routes={routes} basename={basename}>
                        <Grid container>
                            <Grid className="nav" item lg={2} xs={12}>
                                <Navigation basename={basename} />
                            </Grid>
                            <Grid className="content" item lg={10} xs={12}>
                                <Suspense fallback={null}>
                                    <View />
                                </Suspense>
                            </Grid>
                        </Grid>
                    </Router>
                </HelmetProvider>
            </div>
            <Footer />
        </div>
    );
}

export default App;
