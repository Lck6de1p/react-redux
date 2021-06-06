// 引入createstore，专门用于创建redux中最为核心的store对象
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'
// 引入支持异步action
import thunk from 'redux-thunk'
export default createStore(reducer, applyMiddleware(thunk))
