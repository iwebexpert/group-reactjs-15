import {CHATS_LOAD, CHATS_SEND} from 'actions/chats';

const dataBackend = {
    '1': {
        name: 'Chat 1',
        messages: [
            {
                text: 'Сообщение 1',
                author: 'Igor',
            }
        ],
    },
    '2': {
        name: 'Chat 2',
        messages: [
            {
                text: 'Сообщение 2',
                author: 'Igor',
            }
        ],
    },
    '3': {
        name: 'Chat 3',
        messages: [
            {
                text: 'Сообщение 3',
                author: 'Igor',
            }
        ],
    },
};
// const profile = {
	// name: "River's name",
// };
const initialState = {
	loading: false,
	entries: {},
	botted: false
};

export const chatsReducer = (state = initialState, action) => {
	// console.log('chatsReducer action', action);
	//console.log('chatsReducer const', CHATS_LOAD);
	switch(action.type){
		case CHATS_LOAD: {
			//console.log('switch reducer');
			return {
			...state,
			entries: dataBackend
	}};
		case CHATS_SEND: {
			const author = action.payload.author || '';
			if(author === 'bot' && !state.botted){
				return {
					...state,
					entries: {
						...state.entries,
						[action.payload.chatId]: {
							...state.entries[action.payload.chatId],
							messages: [
								...state.entries[action.payload.chatId].messages,
								{
									text: action.payload.text,
									author: action.payload.author,
								}
							]
						}
					},
					botted: true
				}
			}
			if(author !== 'bot'){
				console.log('no booooooooooooooooooot');
				return {
					...state,
					entries: {
						...state.entries,
						[action.payload.chatId]: {
							...state.entries[action.payload.chatId],
							messages: [
								...state.entries[action.payload.chatId].messages,
								{
									text: action.payload.text,
									author: action.payload.author,
								}
							]
						}
					},
					botted: false
				}
			}
		};
		default: return state;
	}
}