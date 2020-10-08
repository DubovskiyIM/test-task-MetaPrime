import Vue from 'vue'
import App from './App.vue'
import index from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router: index,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
