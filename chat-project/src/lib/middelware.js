export const customMiddleware = ({ getState, dispatch }) => next => action => {
    const logger = a => console.log(a, getState());
    if (typeof action === 'function') {
        const plainAction = action({ getState, dispatch });
        logger(plainAction);
        next(plainAction);
    } else {
        logger(action);
        next(action);
    }
};