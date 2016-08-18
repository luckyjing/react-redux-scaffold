import * as TYPE from './constant';
import {namespace} from '../../../global/services'
namespace('JingXin', TYPE);
export function demo(msg) {
  var value = {
    type: TYPE.DEMO,
    data: msg
  };
  console.log(value);
  return value;
}
export function addMenu(menu) {
  return {
    type: TYPE.ADD_MENU,
    data: menu
  }
}
export const asyncDemo = () => {
  return (dispatch, getState) => {
    // 在这儿使用dispath可以实现在异步请求前做一次操作
    return new Promise((resolve) => {
      setTimeout(() => {
        // 在这儿使用dispatch表示异步请求完成
        resolve()
      }, 200)
    })
  }
};
