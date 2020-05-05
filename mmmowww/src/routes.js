import {MessengerRedux} from 'containers/MessengerContainer';
import {AboutPage} from 'pages/AboutPage';
import {PageNotFound} from 'pages/PageNotFound';

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
        path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/7
        exact: true,
        component: MessengerRedux,
    },
    //TODO
    {
        path: '*',
        component: PageNotFound,
    }
];