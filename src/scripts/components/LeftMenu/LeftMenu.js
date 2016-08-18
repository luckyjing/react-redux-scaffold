import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import {Menu, Icon} from '@ali/dblx'
import './LeftMenu.less'
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
function travel(menu) {
  // 先获取本层次信息

}
export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
  }

  renderMenu() {
    return this.props.menu.map((ctx, index)=> {
      if (ctx.childRoutes && ctx.childRoutes.length) {
        // 包含子节点 -> 遍历子节点
        let item = ctx.childRoutes.map((subCtx, id)=> {
          return (<Item key={index + '-' + id}><Link to={ctx.path + '/' + subCtx.path}>{subCtx.name}</Link></Item>)
        });
        return (
          <SubMenu key={index} title={<span>{ctx.name}</span>}>{item}</SubMenu>
        )
      } else {
        // 不含有子节点
        return (<Item key={index}><Link to={ctx.path}>{ctx.name}</Link></Item>)
      }
    })
  }

  render() {
    return (
      <div>
        <Menu mode="inline" theme="dark"
              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
          {this.renderMenu()}
        </Menu>
      </div>
    )
  }
}

