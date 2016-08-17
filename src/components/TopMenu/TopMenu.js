import React, {Component, PropTypes} from 'react'
import {Menu} from '@ali/dblx'
import {IndexLink, Link} from 'react-router'
import './TopMenu.less'

const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
export default class TopMenu extends Component {
  constructor(props) {
    super(props);
  }

  renderMenu(menu) {
    return menu.map((ctx, index)=> {
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
        <Menu mode="horizontal"
              defaultSelectedKeys={['0']}
              style={{lineHeight: '64px'}}
        >
          {this.renderMenu(this.props.menu)}
        </Menu>
      </div>
    )
  }
}

