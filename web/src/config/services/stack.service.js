import http from '../http'

export const getAllStack = () => http.get('/stacks')