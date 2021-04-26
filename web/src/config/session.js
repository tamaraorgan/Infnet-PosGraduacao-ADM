const TOKEN_KEY = 'session_adm_stack'

export const getToken = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
  if (data && data.token) {
    return data.token
  }
  return false
}

export const getUser = () => {
  const data = JSON.parse(localStorage.getItem(TOKEN_KEY))
  if (data && data.user) {
    return data.user
  }
  return false
}

export const isPrivate = () => {
  return getToken() !== false
}

export const session = data =>
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
