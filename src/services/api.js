import axios from 'axios'

import { setupInterceptors } from './interceptors'

export const api = setupInterceptors(
  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000
  })
)