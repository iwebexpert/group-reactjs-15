import {Messenger} from 'components/Messenger';
import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';

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
        path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/7
        exact: true,
        component: Messenger,
    },
    // TODO
    {
        path: '*',
        component: PageNotFound,
    }
];