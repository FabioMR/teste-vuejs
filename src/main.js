import Vue from 'vue'
import router from './router'

require('./global_components')
require('./libs')
require('./api')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<router-view/>'
})
