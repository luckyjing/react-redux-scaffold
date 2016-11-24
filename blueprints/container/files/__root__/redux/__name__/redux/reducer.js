import * as TYPE from './constant';
import {namespace} from '../../../global/services'
namespace('<%= pascalEntityName %>', TYPE);
const initialState = {
  loading: false
};

// Action Handlers
// 需要编辑
const ACTION_HANDLERS = {
  [TYPE.DEMO]: (state, action) => {
    return state;
  },
  [TYPE.LOADING]: (state, action)=> {
    return Object.assign({}, state, {
      loading: true
    });
  },
  [TYPE.GET_INFO]: (state, action)=> {
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
