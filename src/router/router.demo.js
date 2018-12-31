import Vue from 'vue'
import Router from 'vue-router'
import { progress } from '@vant/doc'
import registerRoute from './register-route'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: registerRoute(true),
  scrollBehavior(to, from, savedPostion) {
    return savedPostion || { x: 0, y: 0}
  }
})

router.beforeEach((route, redirect, next) => {
  progress.start()
  next()
})

router.afterEach(() => {
  progress.done()
  if (!router.currentRoute.redirectedFrom) {
    Vue.nextTick(() => window.syncPath())
  }
})

window.vueRouter = router;

export default router;
