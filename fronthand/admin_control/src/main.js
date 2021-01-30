import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Notification from 'vue-notification'
import router from './router'
import Vuex from 'vuex'
import store from './store'

Vue.use(Vuex)
Vue.use(Notification)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
