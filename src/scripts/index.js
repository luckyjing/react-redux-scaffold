import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {useRouterHistory, browserHistory, hashHistory} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import createStore from '../store/createStore'
import AppContainer from '../containers/AppContainer'


// ========================================================
// Store and History Instantiation
// ========================================================
// 在开发时,使用hashHistory可以不需要后端server的配置,在线上访问时,应当使用browserHistory,并且需要服务器端的配置
const initialState = {};
const store = createStore(initialState, hashHistory);
const history = syncHistoryWithStore(hashHistory, store, {
  selectLocationState: (state) => state.router
});


// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');

let render = () => {
  // 载入路由主文件
  const routes = require('../routes/index').default(store);

  ReactDOM.render(
    <AppContainer
      store={store}
      history={history}
      routes={routes}
    />,
    MOUNT_NODE
  )
};

// This code is excluded from production bundle
if (module.hot) {
  const renderApp = render;
  // 如果有错误的话,在页面里展示错误
  const renderError = (error) => {
    const RedBox = require('redbox-react').default;

    ReactDOM.render(<RedBox error={error}/>, MOUNT_NODE);
  };
  // Wrap render in try/catch
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error);
    }
  };

  // Setup hot module replacement
  module.hot.accept('../routes/index', () => {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render()
    })
  })
}

render();
