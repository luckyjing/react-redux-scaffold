# ABC管理平台新版

本项目搭建了`ABC管理平台`的前端基本架构，在此架构的基础上可以很方便地增量开发新功能。

## 概览
本项目使用`dbl`作为项目脚手架工具，`dbl`可以方便地初始化一个项目，并且集成了`mock2easy`，可以让前端独立于后端同学进行开发。

它集成了`redux`命令行工具,所以你需要先按照这个工具,方法下面会提到。因为在写`react`和`redux`代码时,经常会出现需要重复编写`action`,`reducer`的情况,所以使用`redux`工具可以快速地生成相关代码,提高开发效率,目录结构已经布局好,大家开发时只需要在相应的容器内书写业务逻辑即可。

## 项目结构概览
项目目录结构如下:
```
.
├── README.md
├── aliasMap.json
├── blueprints
│   ├── container
│   └── subContainer
├── bower.json
├── build
├── doc
├── mock2easy
├── node_modules
├── package.json
├── src
│   ├── css 
│   ├── scripts 
│       ├── components    # 【主要操作区域】组件存放目录,此处存放的组件大部分为stateless组件,仅仅为了渲染,被container包含
│       ├── containers    # 【主要操作区域】页面里不同路由所对应的组件,使用redux工具自动生成
│       ├── global        # 【主要操作区域】公共的redux部分,比如loading action,为多个container所共用
│       ├── layouts       # 页面布局根组件
│       ├── redux         # 【主要操作区域】路由配置信息,各个container的redux逻辑应存放于此
│       ├── routes        # 路由入口文件,已经配置好
│       ├── store         # store配置文件,无需再次配置
│       └── index.html    # 主入口HTML
└── webpack.config.js # dbl生成
```
![](https://img.alicdn.com/tps/TB1NwDXLpXXXXXDXVXXXXXXXXXX-3795-3541.jpg)
## 项目开发流程
### 1 安装依赖

```
tnpm install 
```

### 2 安装`redux`工具

```
tnpm i redux-cli -g
```

### 3 运行

```
npm run dev
```

### 4 生成container

注意containerName不用加Contaienr后缀,随后会在`redux`和`container`生成相关文件。

```
redux g container containerName
```

在一个`redux`文件夹里:
- `index.js` 这里可以配置自路由信息
- `container.js` 将`React`组件与`Redux`连接起来,在这里往`props`注入内容
- `redux`文件夹 为一般的`Redux`代码

在一个`containers`文件夹里,已经为你生成了`container`相关文件夹,直接在这里使用`Redux`传递下来的`props`即可

### 5 生成子container

```
redux g subContainer containerName #这里填写的是父container名称,注意保持一致
```

它会在你父container再增加一个`sub1.js`,你可以将其更改为你需要的名称,然后**在父container里配置路由**,便可以访问了。

### 6 一句话总结

前端同学开发时,通过`Redux`工具生成属于自己的一个`Container`,随后`React`代码(前端页面代码)写在`container`里,`Redux`业务逻辑代码写在`redux`文件夹相应的位置里,每个`Redux`子文件夹里的`index.js`提供了对路由的配置

## 附录
- Ant.Design 参考手册  [Ant.Design](http://ant.design/)
- less Mixins 参考手册 [lesshat](https://github.com/madebysource/lesshat/blob/master/README.md)
- Redux 生成器 参考手册 [redux-cli](https://github.com/SpencerCDixon/redux-cli)
- Ajax 参考jQuery Ajax 不用怀疑,就是它!
