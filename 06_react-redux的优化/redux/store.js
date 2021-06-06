
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import countReducer from './count_reducer'
import thunk from 'redux-thunk'
export default createStore(countReducer, composeWithDevTools(applyMiddleware(thunk)))
