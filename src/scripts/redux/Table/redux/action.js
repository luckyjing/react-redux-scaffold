import * as TYPE from './constant';
import {namespace} from '../../../global/services'
import $ from 'jquery-ajax'
namespace('Table', TYPE);

export function renderTable(params) {
  return (dispatch, getState) => {
    let state = getState().Table;
    return $.ajax({
      url: "/test/table.json",
      type: 'get',
      data: Object.assign({
        type: state.tab
      }, params,),
      dataType: 'json'
    }).done(res=> {
      dispatch(receiveInfo(res));
    });
  }
}
export function setTab(data) {
  return {
    type: TYPE.SET_TAB,
    data
  }
}
/**
 * 异步请求结束后触发的action
 * @param res {JSON Object} - Ajax请求拿到的JSON对象(已经序列化,可以直接使用)
 * @returns {{type, data: *}}
 */
export function receiveInfo(res) {
  return {
    type: TYPE.RENDER_TABLE,
    data: res
  }
}

