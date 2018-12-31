import Vue from 'vue'
import VantDoc from '@vant/doc'
import App from './App.vue'
import router from './router/router.main'

Vue.use(VantDoc)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
