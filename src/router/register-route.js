import componentDocs from './doc.entry'
import componentDemos from './demo.entry'
import docConfig from './doc.conf.js'
import DemoList from '../components/DemoList'
import './iframe-router'

const registerRoute = (isDemo) => {
  const route = [{
        path: '*',
        redirect: () => `/`
  }];

  if (isDemo){
    route.push({
      path: '/',
      component: DemoList,
    })
  } else {
    route.push({
      path: '/',
      redirect: () => '/intro'
    })
  }


  function addRoute(page) {
    let { path } = page;
    if (path) {
      path = path.replace('/', '');

      const component = isDemo ? componentDemos[path] :  componentDocs[path];

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

export default registerRoute;