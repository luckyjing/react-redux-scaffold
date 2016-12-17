import * as TYPE from './constant';
import {namespace} from './services'
namespace('global', TYPE);
const initState = {
  _system_menu: [],
  _system_now_menu: '',
  NOW_LOCATION: ''
};
const ACTION_HANDLERS = {
  [TYPE.ADD_MENU]: (state, action)=> {
    return Object.assign({}, state, {
      _system_menu: action.data
    });
  },
  [TYPE.NOW_MENU]: (state, action)=> {
    return Object.assign({}, state, {
      _system_now_menu: action.data
    });
  },
  [TYPE.NOW_LOCATION]: (state, action)=> {
    return Object.assign({}, state, {
      NOW_LOCATION: action.data
    });
  }
};
export default function (state = initState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
