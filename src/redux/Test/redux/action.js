import * as TYPE from './constant';
export function demo() {
  return {
    type: TYPE.DEMO,
    data:""
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
