import {LayoutRedux} from 'containers/LayoutContainer';
import {AboutPage} from 'pages/AboutPage';
import {ProfileRedux} from 'containers/ProfileContainer';
import {PageNotFound} from 'pages/PageNotFound';

export const routes = [
    {
        path: '/',
        exact: true,
        component: LayoutRedux,
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
    },
    {
        path: '/chats/:id([0-9]+)', // http://localhost:4000/chats/7
        exact: true,
        component: LayoutRedux,
    },
    {
        path: '/profile',
        exact: true,
        component: ProfileRedux,
    },
    {
        path: '*',
        component: PageNotFound,
    }
];