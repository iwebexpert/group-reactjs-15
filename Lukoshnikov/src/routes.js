import {Layout} from './components/Layout';
import {About} from './pages/About';
import {NotFound} from './pages/NotFound';
import {Home} from './pages/Home';
import {Messenger} from './components/Messenger';

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