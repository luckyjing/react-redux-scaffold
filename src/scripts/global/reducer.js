import * as ACTION from './action';
import * as TYPE from './constant';
import {namespace} from './services'
namespace('global', TYPE);
const initState = {
  _system_menu: [],
  _system_now_menu: ''
};
const ACTION_HANDLERS = {
  [TYPE.ADD_MENU]: (state, action)=> {
    return Object.assign({}, state, {
      _system_menu: state._system_menu.concat(action.data)
    });
  },
  [TYPE.NOW_MENU]: (state, action)=> {
    return Object.assign({}, state, {
      _system_now_menu: action.data
    });
  }
};
export default function (state = initState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
