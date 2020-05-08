import {CHATS_SEND, fireChat} from '../actions/chats';

export default store => next => (action) => {
    switch (action.type) {
        case CHATS_SEND:
            const {author, chatId} = action.payload;
            if (author === 'Bot') {
                store.dispatch(fireChat({
                    chatId,
                    fire: true,
                }));
            }
    }
    return next(action)
}