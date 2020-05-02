import {Layout} from 'components/Layout';
import {ProfilePage} from 'pages/ProfilePage';
import {PageNotFound} from 'pages/PageNotFound';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/profile',
        exact: true,
        component: ProfilePage,
    },
    {
        path: '/chats/:id([0-9]+)',
        exact: true,
        component: Layout,
    },
    //TODO
    {
        path: '*',
        component: PageNotFound,
    }
];