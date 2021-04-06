import { saveAuth } from '../../config/auth'
import authService from '../../services/auth.service'
import history from '../../config/history'

export const SIGN_IN = 'SIGN_IN'

export const signIn = data => {
  return async dispatch => {
    const result = await authService(data)

    if (result.data) {
      saveAuth(result.data)
    }

    dispatch({
      type: SIGN_IN,
      data: result.data
    })

    history.push('/')
  }
}
