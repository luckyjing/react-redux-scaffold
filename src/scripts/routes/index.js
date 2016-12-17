import CoreLayout from '../layouts/CoreLayout'
import PureLayout from '../layouts/PureLayout'
import {nowLocation,addMenu} from '../global/action'
import {baseRoute} from '../config'
import {requireAll} from '../global/services'
/*  Note: 使用Plain Object 方式去配置路由,便于协作 */
export const createRoutes = (store) => {
  let containers = requireAll(require.context('../redux', true, /index\.js$/));
  let childRoutes = containers.map(ctx => ctx(store));
  let route = {
    path: baseRoute,
    component: CoreLayout,
    onEnter: (nextState, replace)=> {
      // 初始化时，将当前路由信息写入到state.global中
      store.dispatch(nowLocation(nextState.location.pathname));
    },
    // 路由规则不匹配时,目前逻辑为 重定向到根路径，也可以自定到其他目录
    childRoutes: childRoutes.concat([{
      path: '*',
      onEnter: (nextState, replace) => {
        replace(baseRoute);
      }
    }]),
    onChange: function(prevState, nextState, replace) {
      // 路由发生改变时，将当前路由信息写入到state.global中
      store.dispatch(nowLocation(nextState.location.pathname));
    }
  };
  store.dispatch(addMenu(route));
  return route;
};
export default createRoutes
