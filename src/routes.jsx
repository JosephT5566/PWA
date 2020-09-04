import { mount, route } from 'navi';
import React from 'react';

import ProfilePage from './ProfilePage';
import MainPage from './MainPage';
import AssistantPage from './AssistantPage';
import DataPage from './DataPage';

const appName = 'PWA';

const routes = mount({
    '/': route({
        title: `Home - ${appName}`,
        view: <MainPage />,
    }),
    '/data': route({
        title: `Data - ${appName}`,
        view: <DataPage />,
    }),
    '/assistant': route({
        title: `Assistant - ${appName}`,
        view: <AssistantPage />,
    }),
    '/profile': mount({
        '/': route({
            title: `Profile - ${appName}`,
            view: <ProfilePage />,
        }),
        '/basic': route({
            title: `Profile/Basic Message - ${appName}`,
            getView: () => import('./ProfilePage/BasicMessage'),
        }),
        '/upload': route({
            title: `Profile/Upload KYC - ${appName}`,
            getView: () => import('./ProfilePage/UploadKYC'),
        }),
        '/doc': route({
            title: `Profile/Documents - ${appName}`,
            getView: () => import('./ProfilePage/Documents'),
        }),
        '/about': route({
            title: `Profile/About Us - ${appName}`,
            getView: () => import('./ProfilePage/About'),
        }),
    }),
});

export default routes;
