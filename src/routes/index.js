import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from '../redux/Home'
import {addMenu} from '../global/action'
function requireAll(r) {
  var keys = r.keys();
  var result = [];
  for (var i = 0, len = keys.length; i < len; i++) {
    if (keys[i] != './index.js' && keys[i].indexOf('Home/index.js') == -1) {
      result.push(r(keys[i]));
    }
  }
  return result;
}
/*  Note: 使用Plain Object 方式去配置路由,便于协作 */
export const createRoutes = (store) => {
  let containers = requireAll(require.context('../redux/', true, /index\.js$/));
  let childRoutes = containers.map(ctx=>ctx(store));
  let HomeContainer = Home(store);
  store.dispatch(addMenu(Object.assign({}, HomeContainer, {
    path: '/'
  })));
  store.dispatch(addMenu(childRoutes));
  return {
    path: '/',
    component: CoreLayout,
    indexRoute: HomeContainer,
    // 路由规则不匹配时,目前逻辑为 重定向到根路径
    childRoutes: childRoutes.concat({
      path: '*',
      onEnter: ({}, replace)=>replace('/')
    })
  }
};
export default createRoutes
