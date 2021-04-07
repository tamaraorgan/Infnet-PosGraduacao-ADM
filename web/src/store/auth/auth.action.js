import { removeToken, saveAuth } from '../../config/auth'
import authService from '../../services/auth.service'
import history from '../../config/history'
import http from '../../config/http'

export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const SIGN_ERROR = 'SIGN_ERROR'

export const signIn = data => {
  return async dispatch => {
    try {
      const result = await authService(data)

      if (result.data) {
        saveAuth(result.data)
        http.defaults.headers['token'] = result.data.token
      }
      dispatch({
        type: SIGN_IN,
        data: result.data
      })

      history.push('/')
    } catch (error) {
      dispatch({
        type: SIGN_ERROR,
        data: error
      })
    }
  }
}

export const logOut = (data) => {
  return async (dispatch) => {
    removeToken()
    dispatch({type: SIGN_OUT})
    history.push('/signin')
  }
}