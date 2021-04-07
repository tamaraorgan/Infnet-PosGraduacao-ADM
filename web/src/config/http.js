import axios from 'axios'
import { getToken } from './auth'

// definindo a url da api
//const urlApi = process.env.REACT_APP_API;
// const urlApi = "https://projeto-02-backend.herokuapp.com/v1";
const urlApi = 'http://localhost:3333'

const http = axios.create({
  baseURL: urlApi
})

http.defaults.headers['content-type'] = 'application/json'

if (getToken()) {
  http.defaults.headers['token'] = getToken()
}

export default http
