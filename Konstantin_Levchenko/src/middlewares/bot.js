import {CHATS_SEND, chatsSend} from '../actions/chats';

const timers = {};

export default store => next => (action) => {
    switch (action.type) {
        case CHATS_SEND:
            const author = (action.payload.author) ? (action.payload.author) : 'anonymous';
            const chatId = action.payload.chatId;
            const message = {
                author: 'Bot',
                text: `Hi, ${author}! I am Bot...`
            }
            if (author !== 'Bot') {
                clearTimeout(timers[chatId]);
                timers[chatId] = setTimeout(() => store.dispatch(chatsSend({
                    ...message,
                    chatId,
                })), 2000);
            }
    }
    return next(action)
}