import * as TYPE from './constant';
import {namespace} from '../../../global/services'
namespace('Litong', TYPE);
const initialState = {
  loading: false
};

// Action Handlers
// 需要编辑
const ACTION_HANDLERS = {
  [TYPE.TEST]: (state, action)=> {
    return Object.assign({}, state, {
      name: "李彤"
    })
  },
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
