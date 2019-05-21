import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import loadMoreReducer from './reducers/loadMoreReducer';
import api from './middleware/api'

export default function configureStore() {
    return createStore(
        loadMoreReducer,
        compose(
            applyMiddleware(thunk, api)
        )
    );
}