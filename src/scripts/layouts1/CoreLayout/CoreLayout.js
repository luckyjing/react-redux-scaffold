import React from 'react'
import './CoreLayout.less'
import * as actions from '../../global/action'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {Menu, Breadcrumb, Icon} from '@ali/dblx'
import LeftMenu from '../../components/LeftMenu'
import TopMenu from '../../components/TopMenu'
import {Tag, Steps} from '@ali/dblx'
const Step = Steps.Step;
export const CoreLayout = ({children, _system_menu, nowRoute}) => (
  <div className='container'>
    <div className="ant-layout-aside">
      <aside className="ant-layout-sider">
        <div className="ant-layout-logo">
          <p>React Redux 控制台</p>
        </div>
        <LeftMenu menu={_system_menu} path={nowRoute}/>
      </aside>
      <div className="ant-layout-main">
        <div className="ant-layout-header">
          {/*<TopMenu menu={_system_menu}/>*/}
        </div>
        <div className="ant-layout-container">
          <div className="ant-layout-breadcrumb">
            {/*面包屑导航*/}
          </div>
          <div className="ant-layout-content">

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
  _system_menu: state.global._system_menu,
  nowRoute: state.global._system_now_menu
});

// 导出链接好的React Class
export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout)
