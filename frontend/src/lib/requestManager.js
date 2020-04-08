import axios from 'axios'
import config from 'config'

axios.defaults.withCredentials = true

export default {
  post: (path, params) => axios.post(`${config.apiUrl}${path}`, params),
  get: path => axios.get(`${config.apiUrl}${path}`),
  put: (path, params) => axios.put(`${config.apiUrl}${path}`, params),
  delete: path => axios.delete(`${config.apiUrl}${path}`)
}
