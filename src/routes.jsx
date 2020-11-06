import { mount, route, redirect, map } from 'navi';
import React from 'react';

import Plot from './views/DataPage/Plot';
import BankCard from './views/ProfilePage/BankCard';

const appName = 'PWA';

const routes = mount({
    '/': route({
        title: `Home - ${appName}`,
        getView: ({ context }) => {
            context.isAuthenticated();
            return import(
                /*webpackChunkName: "MainPage"*/
                './views/MainPage'
            );
        },
    }),
    '/data': mount({
        '/': route({
            title: `Data - ${appName}`,
            getView: ({ context }) => {
                context.isAuthenticated();
                return import(
                    /*webpackChunkName: "DataPage"*/
                    './views/DataPage'
                );
            },
        }),
        '/:id': map(({ context }) =>
            context.isAuthenticated()
                ? route((request) => {
                      let id = request.params.id;
                      console.log(id);
                      return {
                          view: <Plot id={id} />,
                      };
                  })
                : redirect('pwa/data')
        ),
    }),
    '/assistant': route({
        title: `Assistant - ${appName}`,
        getView: ({ context }) => {
            context.isAuthenticated();
            return import(
                /*webpackChunkName: "AssistantPage"*/
                './views/AssistantPage'
            );
        },
    }),
    '/profile': mount({
        '/': map(({ context }) => {
            context.isAuthenticated();
            return route({
                title: `Profile - ${appName}`,
                getView: () =>
                    import(
                        /*webpackChunkName: "ProfilePage"*/
                        './views/ProfilePage'
                    ),
            });
        }),
        '/basic': map(({ context }) =>
            context.isAuthenticated()
                ? route({
                      title: `Profile/Basic Message - ${appName}`,
                      getView: () => import('./views/ProfilePage/BasicMessage'),
                  })
                : redirect('/pwa/profile')
        ),
        '/bank': mount({
            '/': map(({ context }) =>
                context.isAuthenticated()
                    ? route({
                          title: `Profile/Bank Info - ${appName}`,
                          getView: () =>
                              import(
                                  /*webpackChunkName: "BankInfo"*/
                                  './views/ProfilePage/BankInfo'
                              ),
                      })
                    : redirect('/pwa/profile')
            ),
            '/:id': map(({ context }) =>
                context.isAuthenticated()
                    ? route((req) => {
                          let id = req.params.id;
                          return {
                              view: <BankCard id={id} />,
                          };
                      })
                    : redirect('/pwa/profile')
            ),
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
