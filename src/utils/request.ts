import axios from 'axios'

const service = axios.create({
  baseURL: '/', 
  // withCredentials: true, 
  timeout: 6000 
})

service.interceptors.request.use(
  config => {
    /* if (store.token) {
      config.headers['auth'] = getToken()
    } */
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service