import {createStore, applyMiddleware, combineReducers} from 'redux'
import countReducer from './reducers/count'
import personReducer from './reducers/person'
import thunk from 'redux-thunk'

// 汇总reducer
const allReducer = combineReducers({
  count: countReducer,
  person: personReducer
})
export default createStore(allReducer, applyMiddleware(thunk))
