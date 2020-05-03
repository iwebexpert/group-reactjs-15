import { Layout } from './components/Layout';
import { Profile } from './components/Profile';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Layout,
    },
    {
        path: '/chat/:id([\\d]+)',
        exact: true,
        component: Layout,
    },
    {
        path: '/profile',
        exact: true,
        component: Profile,
    },
];
