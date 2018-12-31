import Vue from 'vue'
import App from './DemoApp.vue'
import Vant from 'vant'
import router from './router/router.demo'
import '@vant/doc/helper/touch-simulator';

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
