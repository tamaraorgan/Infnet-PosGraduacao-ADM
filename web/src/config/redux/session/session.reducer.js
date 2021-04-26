import { getToken, getUser } from '../../session'
import { SIGN_IN } from './session.action'

const INITIAL_STATE = {
  loading: false,
  token: getToken() || '',
  user: getUser() || {}
}

export const SignInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      state.token = action.data.token
      state.user = action.data.user
      return state
    default:
      return state
  }
}
