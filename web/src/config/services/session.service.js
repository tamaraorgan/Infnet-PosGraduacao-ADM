import http from '../http'

export const sessionService = data => http.post('/sessions', data)
