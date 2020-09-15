import { mount, route } from 'navi';
import React from 'react';

import Plot from './views/DataPage/Plot';

const appName = 'PWA';

const routes = mount({
    '/': route({
        title: `Home - ${appName}`,
        getView: () => import('./views/MainPage'),
    }),
    '/data': mount({
        '/': route({
            title: `Data - ${appName}`,
            getView: () => import('./views/DataPage'),
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
        getView: () => import('./views/AssistantPage'),
    }),
    '/profile': mount({
        '/': route({
            title: `Profile - ${appName}`,
            getView: () => import('./views/ProfilePage'),
        }),
        '/basic': route({
            title: `Profile/Basic Message - ${appName}`,
            getView: () => import('./views/ProfilePage/BasicMessage'),
        }),
        '/upload': route({
            title: `Profile/Upload KYC - ${appName}`,
            getView: () => import('./views/ProfilePage/UploadKYC'),
        }),
        '/doc': route({
            title: `Profile/Documents - ${appName}`,
            getView: () => import('./views/ProfilePage/Documents'),
        }),
        '/about': route({
            title: `Profile/About Us - ${appName}`,
            getView: () => import('./views/ProfilePage/About'),
        }),
    }),
});

export default routes;
