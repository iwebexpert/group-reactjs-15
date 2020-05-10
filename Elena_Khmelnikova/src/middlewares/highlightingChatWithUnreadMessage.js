import {MESSAGE_SEND, messageSend} from 'actions/messages';
import { chatHighlighting } from 'actions/chats';

export const highlightingChatWithUnreadMessageMiddleware = (store) => (next) => (action) => {

    if (action.type === MESSAGE_SEND) {
        const { author, chatId } = action.payload;

        if (author === 'Бот') {
            setTimeout(() => {
                store.dispatch(
                    chatHighlighting({ chatId }),
                );
            }, 1500);
        }
    }

    return next(action);
}