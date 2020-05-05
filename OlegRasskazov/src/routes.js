import {MessengerRedux} from "containers/MessengerContainer";
import {PageNotFound} from "pages/PageNotFound";
import {Profile} from "components/Profile";

export const routes = [
	{
		path: '/',
		exact: true,
		component: MessengerRedux,
	},
	{
		path: '/profile',
		exact: true,
		component: Profile,
	},
	{
		path: '/chats/:id([0-9])',
		exact: true,
		component: MessengerRedux,
	},
	{
		path: '*',
		component: PageNotFound,
	},
];