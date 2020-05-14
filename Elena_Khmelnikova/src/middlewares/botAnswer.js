import { MESSAGE_SEND, messageSend } from 'actions/messages';

const timers = {};

export const botAnswerMiddleware = (store) => (next) => (action) => {
    if (action.type === MESSAGE_SEND) {
        const { author, chatId } = action.payload;

        const botMessage = {
            'text': 'Какой у вас вопрос?',
            'author': 'Бот',
        };

        if (author !== botMessage.author) {
            clearTimeout(timers[chatId]);

            timers[chatId] = setTimeout(() => {
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