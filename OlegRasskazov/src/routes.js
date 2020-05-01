import {Layout} from "./components/Layout";
import {AboutPage} from "./pages/AboutPage";
import {PageNotFound} from "./pages/PageNotFound";

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
		path: '/chats/:id',
		exact: true,
		component: Layout,
	},
	{
		path: '*',
		component: PageNotFound,
	},
];