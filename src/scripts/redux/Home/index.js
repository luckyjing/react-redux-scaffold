import {injectReducer} from '../../store/reducers'
import Container from './container'
import reducer from './redux/reducer'
import {addMenu} from './redux/action'

export default (store) => {
  // NOTE: 将当前container的reducer注入到全局store中
  injectReducer(store, {key: 'Home', reducer});
  // 路由配置规则
  // 路由配置规则
  const route = {
    path: 'Home',
    name: 'Home',
    component: Container,
    childRoutes: []
  };
  return route;
}

/*
 * 如果需要为本容器添加子容器,请在本文件导出的路由规则对象里,完善childRoutes(Array类型)
 * 每一个路由格式如下:
 * {
 *   path:'relativePath'  路径,直接写当前子容器对应的路径名即可
 *   name:'菜单名称' 耳机菜单展示名称
 *   component: React Class 组件,通过import 引入
 * }
 *
 * Example:
 * 一:生成子容器
 * 执行 redux g subContainer 父容器名称(不包括Container后缀),随后会发现在containers里的父容器
 * 文件夹多了一个sub.js
 * 二:将sub.js改成你需要的名字
 * 三:引入子容器
 * import sub from '../../containers/当前容器文件夹/子容器文件'
 * 四:完善childRoutes
 * childRoutes:[
 * {
 *   path:'sub',
 *   name:'二级容器',
 *   component:sub
 * }
 * ]
 * */
