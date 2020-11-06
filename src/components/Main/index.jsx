import React, { Suspense, useContext } from 'react';
import { Router, View } from 'react-navi';
import HelmetProvider from 'react-navi-helmet-async';
import routes from '../../routes';
import Navigation from '../Navigation';
import Cookie from 'js-cookie';
import JWT from 'jsonwebtoken';
import LoginContext from '../../contexts/LoginContext';

import Grid from '@material-ui/core/Grid';

import './styles.scss';

const basename = process.env.PUBLIC_URL;

export default function Main() {
    const { onJWTChange } = useContext(LoginContext);

    const isAuthenticated = () => {
        const token = Cookie.get('jwt');
        onJWTChange(token);
        try {
            JWT.verify(token, 'secret');
        } catch (err) {
            setTimeout(() => {
                console.log('token verify error: ', err.message);
            });
            Cookie.remove('jwt');
            return false;
        }
        return true;
    };

    return (
        <div className="main">
            <HelmetProvider>
                <Router routes={routes} context={{ isAuthenticated }} basename={basename}>
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
