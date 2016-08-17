import {injectReducer} from '../../store/reducers'
import Container from './container'
import reducer from './redux/reducer'

export default (store) => {
  // NOTE: 将当前container的reducer注入到全局store中
  injectReducer(store, {key: 'Home', reducer});
  // 路由配置规则
  return {
    name: '首页',
    component: Container
  }
}
