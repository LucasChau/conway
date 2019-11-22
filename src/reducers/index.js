import cells from './cells/reducer'
import patterns from './patterns/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
  cells,
  patterns,
});