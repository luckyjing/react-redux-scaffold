import React from 'react'
import './CoreLayout.less'
import '../../../css/index.less'
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
            <div>
              <h1>欢迎访问Redux控制台脚手架项目</h1>
              <Steps current={0} direction="vertical">
                <Step title="首页" description="您当前所在页面为首页" />
                <Step title="添加容器" description="添加一个容器非常简单,请执行redux g container ContainerName,然后刷新试试看。注:ContainerName不需要加Container后缀,会自动载入" />
                <Step title="添加子容器" description="为一个容器添加子容器也非常简单,请执行redux g subContainer ContainerName,该命令会在指定父容器的containers文件夹里为你生成一个sub.js,你需要手动在routes文件夹里配置路由信息" />
                <Step title="完成" description="enjoy it" />
              </Steps>
            </div>
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

