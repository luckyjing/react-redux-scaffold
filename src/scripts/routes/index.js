import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import {addMenu} from '../global/action'
import {baseRoute} from '../config'
import {requireAll} from '../global/services'

/*  Note: 使用Plain Object 方式去配置路由,便于协作 */
export const createRoutes = (store) => {
  let containers = requireAll(require.context('../redux/', true, /index\.js$/));
  let childRoutes = containers.map(ctx=>ctx(store));
  store.dispatch(addMenu(childRoutes));
  return {
    path: baseRoute,
    component: CoreLayout,
    // 路由规则不匹配时,目前逻辑为 重定向到根路径
    childRoutes: childRoutes.concat([{
      path: '*',
      onEnter: ({}, replace)=>replace(baseRoute)
    }]),
    onChange:function(prevState, nextState, replace){
      console.log(nextState.location.pathname)
    }
  }
};
export default createRoutes
