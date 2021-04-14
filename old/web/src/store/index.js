import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import SignReduce from './auth/auth.reducer'

const reducers = combineReducers({
  auth: SignReduce,
})   

const middlewares = [thunk]

const compose = composeWithDevTools(applyMiddleware(...middlewares))

const store = createStore(reducers, compose)

export default store
