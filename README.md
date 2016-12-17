# React技术栈 - 项目脚手架

做过`React`这一块开发的前端同学们可能会有类似的感受，为了能够启动一个`React`项目，我们可能不仅仅只需要`React`这一组件，相应的我们需要去了解`Webpack`的配置，`Babel`的预编译，`Redux`的数据管理，`React-Router`的路由设计，这一套走下来可能就会非常麻烦了，学习成本也大大上升。

为此，本着**简即是美**的想法，受到[react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit)这一项目的启发，于是我在它的基础上再做了一些事情，使得运行`React`栈项目的难度大大降低。

**如果你是一名初入`React`的新同学**，你可以用此脚手架快速的体验`React`的美，熟悉`ES6`的语法，而不用担心配置的细节。

**如果你是一名大牛**，因为我本身技术水平有限，你可以在阅读组织结构后，针对具体细节给予我反馈和改进意见。:blush:

## 一切皆简单

你可以看到这个`GIF`图，想在项目里增加一个新的页面（其实就是一个新的路由），简单地执行一句`redux g container [ContainerName]`，一切便都关联好了，其实在代码层面，得益于`Webpack`的热部署，使得新增加的代码会实时生效。

![脚手架演示](http://7xlqsb.com1.z0.glb.clouddn.com/Untitled.gif)


## 开始使用

### 一、克隆仓库

```bash
git clone git@gitlab.alibaba-inc.com:aliyun/abc-starter-kit.git <your_project_name>
cd <your_project_name>
```

### 二、安装依赖

```bash
npm install # 当然，用cnpm更好
```
### 三、启动

```bash
npm run dev
```

默认启动在`3005`端口，与此同时，还在`8005`端口上启动了`mock`服务，方便大家进行开发，有关`mock`的内容，可以查看此[文章](http://www.luckyjing.com/posts/front-end/mock2easy-middleware.html)端口可以在`package.json`里面进行配置。

现在，你可以访问`http://localhost:3005`了

### 四、创建新路由（页面）

创建新页面我利用了[redux-cli](https://github.com/SpencerCDixon/redux-cli)这个工具，你可以点进去查看它的设计理念，目前，我们只用到了它里面的一点点知识。

需要有一点注意的是：**页面名称一定要大写字母开头，比如Test**，如果提示找不到`redux`，那么先执行一下`npm install redux-cli -g`

```bash
redux g container Test
```

**背后发生了什么？**

它其实就是将`blueprints`下的`container`渲染后复制到`src`文件里，你可以在`src`里看到新增的文件，位于`scripts/containers`和`scripts/redux`里。

### 五、目录结构约定

```bash
.
├── README.md
├── blueprints           # 这里便是我们执行redux命令时复制文件的源头
│   ├── container
│   └── subContainer
├── build
├── doc
├── mock2easy
├── node_modules
├── package.json
├── src
│   ├── scripts
│       ├── containers    # 【主要操作区域】存放每个页面，页面相关的代码全部放置在页面文件夹内
│       ├── global        #  公共的redux部分,比如loading action,为多个container所共用
│       ├── layouts       #  页面布局根组件
│       ├── redux         # 【主要操作区域】路由配置信息,各个页面的redux逻辑应存放于此
│       ├── routes        #  路由入口文件,已经配置好
│       ├── store         #  store配置文件,无需配置
│       └── index.html    #  主入口HTML
└── webpack.config.js # dbl生成
```

### 六、开始写页面


创建好页面后，进入到`container`里的`Test`，你会看到已经生成好了以下代码。

```jsx
import React, {Component, PropTypes} from 'react';
export default class TestContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions,state} = this.props;
    actions.demo("Hello,这儿发起了一个actions,你可以直接发起你在redux定义的actions");
    actions.getInfo();
  }

  render() {
    return (
      <div>
        // ...
        {this.props.children}
      </div>
    );
  }
}

```

**快速理解**

- `render`方法里放置`HTML`，必须至少`return`一个`<div></div>`，且所有内容的最外层必须为单组件，不允许下述情况。
  ```jsx
  // 不允许
  render(){
    return (
      <div>1</div>
      <div>2</div>
    )
  }
  // 允许
  render(){
    return (
      <div>
        <div>1</div>
        <div>2</div>
      </div>
    )
  }
  ```
- 页面仅仅是数据的呈现者，所有的数据从`this.props.state`中拿到，这个`state`存储了这个页面的全部信息，你可以`console.log`仔细查看
- 页面会触发交互，触发事件，这些事件产生的内容，全部交给`redux`，叫做`action`，比如`action.renderPage`,`action.loadingData`
- `let { a,b } = {a:'a',b:'b'}`，这叫做解构，等价于`let a = obj.a`和`let b = obj.b`，写在一起比较简单。
- 导入：页面尽可能拆成一个个组件，要什么`import`什么就可以了。
- 导出
  ```
  // 形式一
  export default A  && import A from '../module'
  // 形式二
  export function A(){}
  export function B(){}

  import {A,B} from '../module'
  ```

> 可能你会发问？redux中的数据怎么传递到页面里，放心，我已经做好了绑定了，在`redux`目录下里有对应的`Test`，进去阅读代码，我已经将此`state`绑定到页面上了，每个页面的`this.props.state`就能拿到`redux`对应的`state`，`action`同理。

- 在`redux/Test/redux`下新建一套`constant`,`reducer`,`action`，然后试着在`TestContainer`里面通过`this.props.action`直接获取吧。

### 七、 打包文件

执行构建命令，`build`文件夹会存放构建好的`css`和`js`文件。

```bash
npm run build
```

恭喜你，你现在可以愉快的开发了~

# Q&A

### 1. 如何在页面初次加载时请求数据？

在React中，每个组件都拥有自己的生命周期，理解起来也非常直观，每个组件都会经历即将挂载，挂载完成，卸载等等条件。我们想实现在页面加载完成后请求数据，只需要在`挂载完成`这个状态，注入自己的逻辑即可，类似于在`jQuery`中经常写的`$(document).ready()`方法，我们在声明一个`React Class`时，完
善`componentDidMount`方法即可，可以在这里调用包含Ajax请求的`action`，去获取数据。

```
componentDidMount() {
  const {actions} = this.props;
  actions.renderTable();
}
```

### 2. `Redux`中的`action`如何发送`Ajax`请求？

我们首先需要准备好一个一般的`action`，它接收接口返回的数据，然后传递给`Reducer`，如下所示：

```
export function renderPage(data){
  return {
    type:TYPE.RENDER,
    data
  }
}
```
异步调用`Ajax`的思路一般是使用一个可以返回`Promise`对象的`action`，随后在这个`Promise`完成时调用（`dispatch`方法）已经准备好的一般`action`，如下所示：
```
export function renderTable(params) {
  return (dispatch, getState) => {
    let state = getState().Table;
    return $.ajax({
      url: "/test/table.json",
      type: 'get',
      data: Object.assign({
        type: state.tab
      }, params,),
      dataType: 'json'
    }).done(res=> {
      // done方法里写一个函数，这个函数将在异步请求完成时被触发，随后调用一般的action即可
      dispatch(renderPage(res));
    });
  }
}
```

- dispatch : Function ， 接受action对象，并发送给reducer
- getState : Function ， 执行后返回全部的state，你可以`console.log`一下查看细节，简单来说，你需要用`state.*`去获得你当前`Container`的`state`，`getState().containerName`，containerName就是你自己起的页面名，如TableContainer那么就是Table，不包括后面的Container。

### 3. 不同页面里面有同名的`action`怎么办？

如果两个页面都需要用`loading`这个`action type`的，在本脚手架里是不会有问题的，我在最终引入`action type`的地方，都加了`namespace`，也就是说，最终呈现出来的`action type`为`A/loading`和`B/loading`，所以是不会产生冲突的。
