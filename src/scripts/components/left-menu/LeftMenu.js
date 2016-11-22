import React, {Component, PropTypes} from 'react'
import {IndexLink, Link} from 'react-router'
import {Menu} from 'antd'
const SubMenu = Menu.SubMenu;
const Item = Menu.Item;
function RenderMenu(menu, location) {
  let key;
  let basePath = menu.path == '/' ? '' : menu.path;
  let filterMenu = menu.childRoutes.filter(({path})=>path != '*');
  let mapMenutoPath = filterMenu.map((menu, index)=> {
    return {
      path: menu.path,
      index: index + 1
    }
  });
  let activeIndex = 1;
  mapMenutoPath.forEach(menu=> {
    if (location.indexOf(menu.path) != -1) {
      activeIndex = menu.index
    }
  });
  return {
    render(){
      key = 0;
      return (
        <Menu mode="inline" theme="dark"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              selectedKeys={[`${activeIndex}`]}
        >
          {filterMenu.map(ctx=>this.generater(ctx, basePath))}
        </Menu>
      )
    },
    generater: function (menuNode, basePath) {
      key++;
      // 获取本层次信息
      let {path, childRoutes, name} = menuNode;
      basePath = `${basePath}/${path}`;
      let children;
      // console.log(`本层路径为:${basePath},名称为${name}`);
      if (childRoutes && childRoutes.length) {
        // console.log('包含子节点,遍历子节点');
        // 包含子节点
        children = childRoutes.map((ctx, index)=>this.generater(ctx, basePath));
        return (
          <SubMenu
            key={key}
            title={<span>{name}</span>}

          >
            {children}
          </SubMenu>
        )
      } else {
        // 叶子节点
        // console.log('本层为叶子节点');
        return (
          <Item
            key={key}
          >
            <Link to={basePath}>{name}</Link>
          </Item>
        )
      }
    }
  }
}
export default class LeftMenu extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {RenderMenu(this.props.menu, this.props.location).render()}
      </div>
    )
  }
}
