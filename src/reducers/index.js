import * as reducers from '.'
import conwayReducer from './conway'
import { combineReducers } from 'redux'

// const rootReducer = combineReducers({
//   ...reducers
// })
export default combineReducers({
  conwayReducer,
});