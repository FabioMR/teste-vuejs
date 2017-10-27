import axios from 'axios';
import Auth from '@/helpers/auth'

export default axios.create({
  baseURL: 'http://dev:3000/app_api',
  headers: {
    Authorization: 'Bearer ' + Auth.token()
  }
})
