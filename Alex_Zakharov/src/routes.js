import { Messenger } from 'components/Messenger';
import { AboutPage } from 'pages/AboutPage';
import { PageNotFound } from 'pages/PageNotFound';
import { ProfilePage } from 'pages/ProfilePage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Messenger,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/profile',
        exact: true,
        component: ProfilePage,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: Messenger,
    },
    {
        path: '*',
        component: PageNotFound,
    }
];