import {CHATS_SEND, chatsSend,  chatFlash} from 'actions/chats';

const timeoutId = [];

export const bot = (store) => (next) => {
	return (action) => {
		const {author, chatId} = action.payload || '';
		switch(action.type){
			case CHATS_SEND: {
				if(author !== 'bot'){
					next(action);
					clearTimeout(timeoutId[chatId]);
					timeoutId[chatId] = setTimeout(() => {
						next(chatsSend({
							chatId,
							author: 'bot',
							text: `Довольно интересная мысль ${author}`
						}));
						next(chatFlash(chatId, true));
						setTimeout(()=> {
							next(chatFlash(chatId, false));
						}, 10000)
					}, 3000);
					return;
				
				}
			}
		}
		return next(action);
	}
}