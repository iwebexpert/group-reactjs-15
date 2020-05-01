import {Layout} from './components/Layout';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';
import {Home} from './pages/Home';
import {Messenger} from './components/Messenger';
import {Profile} from './pages/Profile';

export const routes = [
	{
		path: '/',
		exact: true,
		component: Home
	},
	{
		path: '/about',
		exact: true,
		component: About
	},
	{
		path: '/profile',
		exact: true,
		component: Profile
	},
	{
		path: '/chats',
		exact: true,
		component: Layout
	},
	{
		path: '/chat/:id(\\d+)',
		exact: true,
		component: Layout
	},
	{
		path: '*',
		component: NotFound
	}
];