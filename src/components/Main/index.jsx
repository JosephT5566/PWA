import React, { Suspense, useContext } from 'react';
import { Router, View } from 'react-navi';
import HelmetProvider from 'react-navi-helmet-async';
import Cookie from 'js-cookie';
import JWT from 'jsonwebtoken';

import routes from '../../route/routes';
import LoginContext from '../../contexts/LoginContext';
import Navigation from '../Navigation';

import Grid from '@material-ui/core/Grid';

import { KEY, COOKIES } from '../../assets/types';

import './styles.scss';

const basename = process.env.PUBLIC_URL;

export default function Main() {
    const { onChangeLogin } = useContext(LoginContext);

    const isAuthenticated = () => {
        const jwt = Cookie.get(COOKIES.jwt);
        try {
            JWT.verify(jwt, KEY);
        } catch (error) {
            console.log('token verify error: ', error.message);
            Cookie.remove(COOKIES.jwt);
            onChangeLogin(false);
            return false;
        }
        onChangeLogin(true);
        return true;
    };

    return (
        <div id="main">
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
