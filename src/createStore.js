import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { websocket } from './middleware/websocket'
import RootReducer from './reducers';

export const middlewares = [websocket];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(RootReducer);