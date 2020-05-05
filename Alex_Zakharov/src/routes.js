import { MessengerRedux } from 'containers/MessengerContainer';
import { AboutPage } from 'pages/AboutPage';
import { PageNotFound } from 'pages/PageNotFound';
import { ProfilePage } from 'pages/ProfilePage';

export const routes = [
    {
        path: '/',
        exact: true,
        component: MessengerRedux,
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
        component: MessengerRedux,
    },
    {
        path: '*',
        component: PageNotFound,
    }
];