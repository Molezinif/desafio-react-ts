import axios from 'axios'

export const apiUrl = 'https://jsonplaceholder.typicode.com'

const api = axios.create({
  baseURL: apiUrl,
})

export default api
