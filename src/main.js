import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.use(VueToast);


import VueMask from 'v-mask';
Vue.use(VueMask);






Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
