import axios from 'axios'
//import { TFetchUsers } from '../interfaces'

const apiUrl = 'https://jsonplaceholder.typicode.com'

const api = axios.create({
  baseURL: apiUrl,
})

export default api
