import { MESSAGE_SEND } from 'actions/messages';
import { chatHighlighting } from 'actions/chats';

export const highlightingChatWithUnreadMessageMiddleware = (store) => (next) => (action) => {

    if (action.type === MESSAGE_SEND) {
        const { author, chatId } = action.payload;
        const { router } = store.getState();

        if (author === 'Бот' && router.location.pathname !== `/chat/${chatId}`) {
            setTimeout(() => {
                store.dispatch(
                    chatHighlighting({ chatId }),
                );
            }, 1500);
        }
    }

    return next(action);
};
