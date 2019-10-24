import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { websocket } from '../middleware/websocket'
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(websocket, createLogger()),
      //applyMiddleware(thunk, websocket),
    )
  )

  return store
}

export default configureStore