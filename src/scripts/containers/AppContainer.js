import React, {Component, PropTypes} from 'react'
import {Router, applyRouterMiddleware} from 'react-router'
import {Provider} from 'react-redux'

/**
 *  顶层容器,包含Route的配置,将众多组件连接起来,无需配置
 */
class AppContainer extends Component {
  render() {
    const {history, routes, store} = this.props;
    return (
      <Provider store={store}>
        <div>
          <Router history={history} children={routes}/>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
