// loggerMiddleware()()()

export function loggerMiddleware(store) {
    return function wrapDispatch(next) {
        return function dispatchAndLog(action) {
            console.log('Log. Action: ', action);
            console.log('prevState()', store.getState());

            // Вызов reducer
            const result = next(action);
            console.log('nextState()', store.getState());
            console.log('result: ', result);
            return result;
        }
    }
}