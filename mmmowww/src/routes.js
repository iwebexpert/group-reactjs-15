import {MessengerRedux} from 'containers/MessengerContainer';

import {AboutPage} from 'pages/AboutPage';
import {HomePage} from 'pages/HomePage';
import {General} from 'pages/General';
import {ContactsPage} from 'pages/ContactsPage';
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
        path: '/General',
        exact: true,
        component: General,
    },
    {
        path: '/ContactsPage',
        exact: true,
        component: ContactsPage,
    },
    {
        path: '/chats/:id([0-9]+)', //http://localhost:4000/chats/7
        exact: true,
        component: MessengerRedux,
    },
    
    {
        path: '*',
        component: PageNotFound,
    }
];