import {combineReducers} from 'redux'
import {routerReducer as router} from 'react-router-redux'
import global from '../global/reducer'
export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    router,
    global,
    ...asyncReducers
  })
};
// 注入reducer,在routes中每个模块需要手动注入,之所以拆开是为了分离代码,实现在各自模块里注入
export const injectReducer = (store, {key, reducer}) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer
