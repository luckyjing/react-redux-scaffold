import * as TYPE from './constant'
import {namespace} from './services'
namespace('global',TYPE);
export function addMenu(data) {
  return {
    type: TYPE.ADD_MENU,
    data
  }
}
export function nowMenu(data) {
  return {
    type:TYPE.NOW_MENU,
    data
  }
}
