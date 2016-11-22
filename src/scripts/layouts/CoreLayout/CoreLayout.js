import React from 'react'
import * as actions from '../../global/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LeftMenu from '../../components/left-menu'
export const CoreLayout = ({children, _system_menu, nowRoute, router}) => (
  <div className='container'>
    <div className="layout-aside">
      <aside className="layout-sider">
        <div className="layout-logo">
          <p>控制台系统</p>
        </div>
        <LeftMenu menu={_system_menu} path={nowRoute} location={router.locationBeforeTransitions.pathname}/>
      </aside>
      <div className="layout-main">
        <div className="layout-container">
          <div className="layout-content">
            {children}
          </div>
        </div>
      </div>
      <div className="layout-footer">
        Ant Design 版权所有 © 2016 由蚂蚁金服体验技术部支持
      </div>
    </div>
  </div>
);


// 将actions绑定到props上
const mapDispatchToProps = (dispatch) => ({
  action: bindActionCreators(actions, dispatch)
});

// 将state绑定到props上
const mapStateToProps = (state) => ({
  router: state.router,
  _system_menu: state.global._system_menu,
  nowRoute: state.global._system_now_menu
});

// 导出链接好的React Class
export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
