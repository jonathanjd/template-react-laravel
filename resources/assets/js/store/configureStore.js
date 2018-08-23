import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();
const router = routerMiddleware(history);

export const configureStore = (options, rootReducer) => {

    const { initialState = {} } = options;

    const middlewares = [
        thunk,
        router,
        promiseMiddleware({
            promiseTypeSuffixes: ['START', 'SUCCESS', 'ERROR'],
        }),
        reduxImmutableStateInvariant(),
    ];

    return createStore(rootReducer, initialState, composeEnchancers(applyMiddleware(...middlewares)));

}
