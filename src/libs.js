import Vue from 'vue'

import jQuery from 'jquery'
global.$ = global.jQuery = jQuery

import Popper from 'popper.js'
global.Popper = Popper

require('bootstrap')

import VueSVGIcon from 'vue-svgicon'
import './icons'
Vue.use(VueSVGIcon)

const moment = require('moment')
require('moment/locale/es')
Vue.use(require('vue-moment'), { moment })

import ptBR from 'vee-validate/dist/locale/pt_BR';
import VeeValidate, { Validator } from 'vee-validate';
Validator.localize('pt-BR', ptBR);
Vue.use(VeeValidate, {locale: 'pt-BR'});
