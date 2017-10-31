export default {
  loggedIn() {
    return !!localStorage.token
  },
  login(user, token) {
    localStorage.setItem('currentUser', JSON.stringify(user))
    localStorage.token = token
  },
  logout() {
    localStorage.currentUser = ''
    localStorage.token = ''
  },
  currentUser() {
    return JSON.parse(localStorage.getItem('currentUser'))
  },
  token() {
    return localStorage.token
  },
}

import Auth from './auth'
global.Auth = Auth
