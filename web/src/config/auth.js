const TOKEN_KEY = 'auth_adm_stacks'

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

export const saveAuth = data =>
  localStorage.setItem(TOKEN_KEY, JSON.stringify(data))
