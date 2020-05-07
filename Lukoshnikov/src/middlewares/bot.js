import {CHATS_SEND, chatsSend} from 'actions/chats';

export const bot = (store) => (next) => {
	return (action) => {
		const {author, chatId} = action.payload || '';
		
		let timeoutId = null;
		switch(action.type){
			case CHATS_SEND: {
				if(author !== 'bot'){
					next(action);
					timeoutId = setTimeout(() => {
						next(chatsSend({
							chatId,
							author: 'bot',
							text: `Довольно интересная мысль ${author}`
						}));
						
					}, 3000);
					// Увидел это в примере в мануале, но что-то у меня не работает он
					return function cancel(){
						clearTimeout(timeoutId);
					}
				};
			}
		}
		return next(action);
	}
}