import Vue from 'vue'
import Router from 'vue-router'
import { progress } from '@vant/doc'
import registerRoute from './register-route'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: registerRoute()
})

router.beforeEach((route, redirect, next) => {
  progress.start()
  document.title = route.meta.title || document.title
  next()
})

router.afterEach(() => {
  progress.done()
  window.scrollTo(0, 0)
  Vue.nextTick(() => window.syncPath())
})

window.vueRouter = router;

export default router;
