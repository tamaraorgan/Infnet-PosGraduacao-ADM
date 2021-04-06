import { SIGN_IN } from './auth.action'
import { getToken, getUser } from '../../config/auth'

const INITIAL_STATE = {
  loading: false,
  token: getToken() || '',
  user: getUser() || {}
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      state.token = action.data.token
      state.user = action.data.user
      return state
    default:
      return state
  }
}

export default reducer
