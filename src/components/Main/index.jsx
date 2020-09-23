import React, { Suspense } from 'react';
import { Router, View } from 'react-navi';
import Grid from '@material-ui/core/Grid';
import HelmetProvider from 'react-navi-helmet-async';
import routes from '../../routes';
import Navigation from '../Navigation';

import './styles.scss';

const basename = process.env.PUBLIC_URL;

export default function Main() {
    return (
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
    );
}
