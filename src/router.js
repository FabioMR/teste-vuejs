import Vue from 'vue'
import Router from 'vue-router'
import SessionNew from '@/pages/SessionNew'
import PasswordNew from '@/pages/PasswordNew'
import Home from '@/pages/Home'
import PasswordEdit from '@/pages/PasswordEdit'
import AdminIndex from '@/pages/AdminIndex'
import CityIndex from '@/pages/CityIndex'
import ReportIndex from '@/pages/ReportIndex'
import ReportNew from '@/pages/ReportNew'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/entrar', name: 'SessionNew', component: SessionNew, meta: { skipAuth: true }},
    { path: '/esqueci-minha-senha', name: 'PasswordNew', component: PasswordNew, meta: { skipAuth: true }},
    { path: '/', name: 'Home', component: Home },
    { path: '/alterar-senha', name: 'PasswordEdit', component: PasswordEdit },
    { path: '/administradores', name: 'AdminIndex', component: AdminIndex },
    { path: '/cidades', name: 'CityIndex', component: CityIndex },
    { path: '/problemas-reportados', name: 'ReportIndex', component: ReportIndex },
    { path: '/problemas-reportados/reportar', name: 'ReportNew', component: ReportNew },
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
