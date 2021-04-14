import axios from 'axios'

const urlApi = 'http://localhost:3333'

const http = axios.create({
  baseURL: urlApi
})

http.defaults.headers['content-type'] = 'application/json'

export default http