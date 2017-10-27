import Vue from 'vue'
import router from './router'

import API from './api';
global.API = API

import LoginLayout from './layouts/Login'
Vue.component('login-layout', LoginLayout)

import AppLayout from './layouts/App'
Vue.component('app-layout', AppLayout)

import jQuery from 'jquery'
global.$ = global.jQuery = jQuery

import Popper from 'popper.js'
global.Popper = Popper

require('bootstrap')

import VueSVGIcon from 'vue-svgicon'
import './icons'
Vue.use(VueSVGIcon)

import ptBR from 'vee-validate/dist/locale/pt_BR';
import VeeValidate, { Validator } from 'vee-validate';
Validator.localize('pt-BR', ptBR);
Vue.use(VeeValidate, {locale: 'pt-BR', classes: true, classNames: {valid: 'is-valid', invalid: 'is-invalid'}});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<router-view/>'
})
