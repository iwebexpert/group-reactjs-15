import {MessengerRedux} from "containers/MessengerContainer";
import {PageNotFound} from "pages/PageNotFound";
import {ProfileRedux} from "containers/ProfileContainer";

export const routes = [
	{
		path: '/',
		exact: true,
		component: MessengerRedux,
	},
	{
		path: '/profile',
		exact: true,
		component: ProfileRedux,
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