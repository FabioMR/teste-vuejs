import Vue from 'vue'
import Router from 'vue-router'
import Auth from './helpers/auth'
import SessionNew from '@/pages/SessionNew'
import PasswordNew from '@/pages/PasswordNew'
import Home from '@/pages/Home'
import PasswordEdit from '@/pages/PasswordEdit'
import AdminIndex from '@/pages/AdminIndex'
import ContactIndex from '@/pages/ContactIndex'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/entrar', name: 'SessionNew', component: SessionNew, meta: { skipAuth: true }},
    { path: '/esqueci-minha-senha', name: 'PasswordNew', component: PasswordNew, meta: { skipAuth: true }},
    { path: '/', name: 'Home', component: Home },
    { path: '/alterar-senha', name: 'PasswordEdit', component: PasswordEdit },
    { path: '/administradores', name: 'AdminIndex', component: AdminIndex },
    { path: '/contatos', name: 'ContactIndex', component: ContactIndex },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.skipAuth)) {
    if (Auth.loggedIn()) {
      next({ name: 'Home' })
    } else {
      next()
    }
  } else {
    if (Auth.loggedIn()) {
      next()
    } else {
      next({ name: 'SessionNew', query: { redirect: to.fullPath } })
    }
  }
})

export default router
