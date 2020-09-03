import { mount, route } from 'navi';
import React from 'react';

import ProfilePage from './ProfilePage';
import MainPage from './MainPage';
import AssistantPage from './AssistantPage';
import DataPage from './DataPage';

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
    '/profile': mount({
        '/': route({
            title: 'profile',
            view: <ProfilePage />,
        }),
        '/basic': route({
            title: 'basic message',
            getView: () => import('./ProfilePage/BasicMessage'),
        }),
        '/upload': route({
            title: 'upload KYC',
            getView: () => import('./ProfilePage/UploadKYC'),
        }),
        '/private': route({
            title: 'private doc',
        }),
        '/about': route({
            title: 'about us',
        }),
    }),
});

export default routes;
