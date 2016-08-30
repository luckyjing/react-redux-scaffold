import * as TYPE from './constant';
import {namespace} from '../../../global/services'
import $ from 'jquery-ajax'
namespace('<%= pascalEntityName %>', TYPE);

export function demo(msg) {
  return {
    type: TYPE.DEMO,
    data: msg
  }
}
/**
 * 在发起异步Ajax请求前,可以触发一次loading action,此时可以根据loading的状态在页面里展示加载提示
 * @returns {{type}}
 */
export function loading() {
  return {
    type: TYPE.LOADING
  }
}
/**
 * 异步请求结束后触发的action
 * @param res {JSON Object} - Ajax请求拿到的JSON对象(已经序列化,可以直接使用)
 * @returns {{type, data: *}}
 */
export function receiveInfo(res) {
  return {
    type: TYPE.GET_INFO,
    data: res
  }
}
/**
 * 异步请求的action,在发送请求前打开loading,在发送请求后由后续的action去关闭loading
 * @returns {Promise}
 */
export function getInfo() {
  return (dispatch, getState) => {
    // 在这儿使用dispath可以实现在异步请求前做一次操作
    dispatch(loading());
    return $.ajax({
      url:"/test.json",
      data:{},
      dataType:'json'
    }).done(res=>{
      dispatch(receiveInfo(res));
    });
  }
}
