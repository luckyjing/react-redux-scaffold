import * as TYPE from './constant';
import {namespace} from '../../../global/services'
namespace('Table', TYPE);
const tabs = [{
  key: '1',
  name: '类别1',
  default: true
}, {
  key: '2',
  name: '类别2'
}];
const initialState = {
  loading: false,
  tabs: tabs,
  tab: tabs[0].key
};

// Action Handlers
// 需要编辑
const ACTION_HANDLERS = {
  [TYPE.RENDER_TABLE]: (state, action)=> {
    let data = action.data;
    return Object.assign({}, state, data);
  },
  [TYPE.SET_TAB]: (state, actions)=> {
    return Object.assign({}, state, {
      tab: actions.data
    })
  }
};

// Reducer
// 无需编辑
export default function (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state
}
