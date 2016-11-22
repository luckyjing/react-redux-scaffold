import * as TYPE from './constant';
import {namespace} from '../../../global/services'
namespace('List', TYPE);
const initialState = {
  loading: false
};

// Action Handlers
// 需要编辑
const ACTION_HANDLERS = {
  [TYPE.DEMO]: (state, action) => {
    console.log(action);
    return state;
  },
  [TYPE.LOADING]: (state, action)=> {
    console.log(action);
    return Object.assign({}, state, {
      loading: true
    });
  },
  [TYPE.GET_INFO]: (state, action)=> {
    console.log(action);
    return Object.assign({}, state, {
      loading: false
    })
  }
};

// Reducer
// 无需编辑
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
