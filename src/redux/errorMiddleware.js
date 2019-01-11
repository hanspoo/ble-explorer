import isPromise from 'is-promise';

const tiposAction = /^ADULTO/i;

export default function errorMiddleware() {
  return next => action => {
    // If not a promise, continue on
    if (!isPromise(action.payload)) {
      return next(action);
    }

    console.log('errorMiddleware: action.type', action.type);
    if (action.type.match(tiposAction)) {
      // Dispatch initial pending promise, but catch any errors
      return next(action).catch(error => {
        console.log('catching action', error);

        return error;
      });
    }

    return next(action);
  };
}
