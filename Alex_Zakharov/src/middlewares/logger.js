export function loggerMiddleware(store) {
    return function dispatch(next) {
        return function logger(action) {
            console.log('Log. Action: ', action);
            console.log('prevState()', store.getState());

            const result = next(action);
            console.log('nextState()', store.getState());
            console.log('result: ', result);
            return result;
        }
    }
}
