import { mount, route } from 'navi';
import React from 'react';

import Plot from './views/DataPage/Plot';
import BankCard from './views/ProfilePage/BankCard';

const appName = 'PWA';

const routes = mount({
    '/': route({
        title: `Home - ${appName}`,
        getView: () =>
            import(
                /*webpackChunkName: "MainPage"*/
                './views/MainPage'
            ),
    }),
    '/data': mount({
        '/': route({
            title: `Data - ${appName}`,
            getView: () =>
                import(
                    /*webpackChunkName: "DataPage"*/
                    './views/DataPage'
                ),
        }),
        '/:id': route((req) => {
            let id = req.params.id;
            return {
                view: <Plot id={id} />,
            };
        }),
    }),
    '/assistant': route({
        title: `Assistant - ${appName}`,
        getView: () =>
            import(
                /*webpackChunkName: "AssistantPage"*/
                './views/AssistantPage'
            ),
    }),
    '/profile': mount({
        '/': route({
            title: `Profile - ${appName}`,
            getView: () =>
                import(
                    /*webpackChunkName: "ProfilePage"*/
                    './views/ProfilePage'
                ),
        }),
        '/basic': route({
            title: `Profile/Basic Message - ${appName}`,
            getView: () => import('./views/ProfilePage/BasicMessage'),
        }),
        '/bank': mount({
            '/': route({
                title: `Profile/Bank Info - ${appName}`,
                getView: () =>
                    import(
                        /*webpackChunkName: "BankInfo"*/
                        './views/ProfilePage/BankInfo'
                    ),
            }),
            '/:id': route((req) => {
                let id = req.params.id;
                return {
                    view: <BankCard id={id} />,
                };
            }),
        }),
        '/doc': route({
            title: `Profile/Documents - ${appName}`,
            getView: () => import('./views/ProfilePage/Documents'),
        }),
        '/about': route({
            title: `Profile/About Us - ${appName}`,
            getView: () => import('./views/ProfilePage/About'),
        }),
        '/language': route({
            title: `Profile/Language - ${appName}`,
            getView: () => import('./views/ProfilePage/Language'),
        }),
        '/login': route({
            title: `Profile/Log in - ${appName}`,
            getView: () => import('./views/ProfilePage/Login'),
        }),
    }),
});

export default routes;
