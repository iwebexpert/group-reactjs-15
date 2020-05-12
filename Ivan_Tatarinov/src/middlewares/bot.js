import {CHATS_SEND, chatsSend} from 'actions/chats';

const timers = {};

export default store => next => (action) => {
    if (action.type === CHATS_SEND) {
        const author = (action.payload.author) ? (action.payload.author) : 'guest';
        const {chatId} = action.payload;
        const message = {
            author: 'Bot',
            text: `Hi, ${author}! This is a service message`,
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