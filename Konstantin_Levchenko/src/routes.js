import {Layout} from 'components/Layout';
import {AboutPage} from 'pages/AboutPage';
import {Profile} from 'components/Profile';
import {PageNotFound} from 'pages/PageNotFound';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id([0-9]+)', // http://localhost:4000/chats/7
        exact: true,
        component: Layout,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
    },
    {
        path: '*',
        component: PageNotFound,
    }
];