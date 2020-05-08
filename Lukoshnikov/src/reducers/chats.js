import {CHAT_FLASH, CHATS_LOAD, CHATS_SEND, CHAT_ADD, CHAT_DELETE} from 'actions/chats';

const dataBackend = {
    '1': {
        name: 'Chat 1',
		flashing: false,
        messages: [
            {
                text: 'Сообщение 1',
                author: 'Igor',
            }
        ],
    },
    '2': {
        name: 'Chat 2',
		flashing: false,
        messages: [
            {
                text: 'Сообщение 2',
                author: 'Igor',
            }
        ],
    },
    '3': {
        name: 'Chat 3',
		flashing: false,
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
	entries: {}
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
			if(author === 'bot'){
				console.log('BOOOOOOOOOOOOOOOOOT');
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
				}
			}
		};
		case CHAT_ADD: {
			const {chatId, name} = action.payload;
			return {
				...state,
				entries: {
					...state.entries,
					[chatId]: {
						...state.entries[chatId],
						name,
						messages: []
					}
				}
			}
		}
		case CHAT_FLASH: {
			const {chatId, flashState} = action.payload;
			return {
				...state,
				entries: {
					...state.entries,
					[chatId]: {
						...state.entries[chatId],
						flashing: flashState
					}
				}
			}
		}
		case CHAT_DELETE: {
			const chatId = action.payload;
			const keys = Object.keys(state.entries);
			const id = keys.findIndex((el) => {
				el == chatId
			});
			const newEntries = {};
			for(let el in state.entries){
				if(el != chatId){
					newEntries[el] = {...state.entries[el]};
				}
			}
				console.log({...newEntries})
			return {
				...state,
				entries: {
					...newEntries
				}
			}
		}
		default: return state;
	}
}