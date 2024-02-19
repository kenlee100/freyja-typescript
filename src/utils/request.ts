import axios from 'axios'
import type { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

const service: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 6000,
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    console.log('response', response)
    return response.data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

export default service
