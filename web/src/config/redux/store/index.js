import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension' //conecta com o extensão do navegador
import thunk from 'redux-thunk'

//importação dos reducers
import { SignInReducer } from '../session/session.reducer'

const reducers = combineReducers({
  session: SignInReducer
})

// middlewares de redux
const middlewares = [thunk]

// compose que junta os meddlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middlewares))

// crair a stores do redux
const store = createStore(reducers, compose)

export default store
