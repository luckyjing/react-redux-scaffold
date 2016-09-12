import React from 'react'
import * as actions from '../../global/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LeftMenu from '../../components/LeftMenu'
export const CoreLayout = ({children, _system_menu, nowRoute, router}) => (
  <div className='container'>
    <div className="dblx-layout-aside">
      <aside className="dblx-layout-sider">
        <div className="dblx-layout-logo">
          <p>控制台</p>
        </div>
        <LeftMenu menu={_system_menu} path={nowRoute} location={router.locationBeforeTransitions.pathname}/>
      </aside>
      <div className="dblx-layout-main">
        <div className="dblx-layout-container">
          <div className="dblx-layout-content">
            {children}
          </div>
        </div>
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

