import './assets/tailwind.css'
import './plugins/fontawesome'

import Vue from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'

// import './plugins/nedb.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
