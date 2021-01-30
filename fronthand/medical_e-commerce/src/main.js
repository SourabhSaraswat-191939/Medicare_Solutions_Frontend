import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import AOS from 'aos'
import 'aos/dist/aos.css'
import router from './router'
import store from './store'
import Vuex from 'vuex'
import Notification from 'vue-notification'



Vue.use(Vuex)
Vue.use(Notification)
Vue.config.productionTip = false


new Vue({
  created() {
    AOS.init()
  },

  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
