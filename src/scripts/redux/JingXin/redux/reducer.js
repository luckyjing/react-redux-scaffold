import * as TYPE from './constant';
import {namespace} from '../../../global/services'
namespace('JingXin', TYPE);
const initialState = {

};

// Action Handlers
// 需要编辑
const ACTION_HANDLERS = {
  [TYPE.DEMO]: (state, action) => state,
  [TYPE.ADD_MENU]:(state,action)=>Object.assign({},state,{
    menu:action.data
  })
};

// Reducer
// 无需编辑
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
