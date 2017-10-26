export default {
  loggedIn: () => {
    return !!localStorage.token
  },
  login: (token) => {
    localStorage.token = token
  },
  logout: () => {
    localStorage.token = ''
  },
}
