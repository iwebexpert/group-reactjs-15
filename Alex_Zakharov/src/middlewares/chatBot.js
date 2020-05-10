import { CHATS_SEND, chatsSend } from 'actions/chats';

export function chatBotMiddleware(store) {
    return function dispatch(next) {
        return function chatBot(action) {
            if (action.type === CHATS_SEND) {
                if (action.payload.author !== 'ChatBot') {
                    const msg = { id: action.payload.id, author: 'ChatBot', text: 'Hello!' };
                    setTimeout(() => store.dispatch(chatsSend(msg)), 2000);
                }
            }
            return next(action);
        }
    }
}
