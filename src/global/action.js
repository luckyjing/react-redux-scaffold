import * as TYPE from './constant'
export function addMenu(data) {
  return {
    type: TYPE.ADD_MENU,
    data
  }
}
