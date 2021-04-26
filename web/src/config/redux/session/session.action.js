import history from '../../history'
import { sessionService } from '../../services/session.service'
import { session } from '../../session'

export const SIGN_IN = 'SIGN_IN'

export const signInAction = data => {
  return async dispatch => {
    const result = await sessionService(data)
    if (result.data) {
      session(result.data)
    }
    dispatch({
      type: SIGN_IN,
      data: result.data
    })
    history.push('/')
  }
}
