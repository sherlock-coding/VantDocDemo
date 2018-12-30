import Vue from 'vue'
import Router from 'vue-router'
import { progress } from '@vant/doc'
import docConfig from './doc.conf'
import componentDocs from './doc.entry'
import './utils/iframe-router'

Vue.use(Router)

const registerRoute = () => {
  const route = [{
    path: '/',
    redirect: () => '/intro'
  }];

  function addRoute(page) {
    let { path } = page;
    if (path) {
      path = path.replace('/', '');

      const component = componentDocs[path];

      if (!component) {
        return;
      }

      route.push({
        name: path,
        component,
        path: `/${path}`,
        meta: {
          path,
          name: page.title
        }
      });
    }
  }

  const navs = docConfig.nav || [];
  navs.forEach(nav => {
    if (nav.groups) {
      nav.groups.forEach(group => {
        group.list.forEach(page => addRoute(page));
      });
    } else {
      addRoute(nav);
    }
  });

  return route;
}

const router = new Router({
  mode: 'hash',
  routes: registerRoute()
  // routes: [
  //   {
  //     path: '/',
  //     name: 'home',
  //     component: Home
  //   },
  //   {
  //     path: '/about',
  //     name: 'about',
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
  //   }
  // ]
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
