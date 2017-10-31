import axios from 'axios';

global.API = axios.create({
  baseURL: 'http://dev:3000/app_api',
  headers: {
    Authorization: 'Bearer ' + Auth.token()
  }
})
