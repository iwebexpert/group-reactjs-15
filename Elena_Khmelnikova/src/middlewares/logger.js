
export function loggerMiddleware(store) {
    return function wrapDispatch(next) {
        return function dispatchAndLog(action) {
            console.log('Action', action);
            console.log('Prev state', store.getState());

            const result = next(action);
            console.log('Next state', store.getState());
            return result;
        }
    }
}
