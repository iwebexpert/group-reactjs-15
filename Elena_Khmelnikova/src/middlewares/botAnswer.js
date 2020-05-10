import { MESSAGE_SEND } from 'actions/messages';
import { messageSend } from 'actions/messages';

export const botAnswerMiddleware = (store) => (next) => (action) => {

    if (action.type === MESSAGE_SEND) {
        const { author, chatId } = action.payload;

        const botMessage = {
            'text': 'Какой у вас вопрос?',
            'author': 'Бот',
        };

        if (author !== botMessage.author) {
            setTimeout(() => {
                store.dispatch(
                    messageSend({
                        ...botMessage,
                        chatId,
                    })
                );
            }, 1000);
        }
    }

    return next(action);
}