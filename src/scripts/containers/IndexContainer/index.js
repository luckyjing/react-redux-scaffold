import React, {Component, PropTypes} from 'react';
import {Tag, Steps,Alert,Input} from '@ali/dblx'
const Step = Steps.Step;
export default class IndexContainer extends Component {
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
        <h1>欢迎访问Redux控制台脚手架项目</h1>
        <Steps current={0} direction="vertical">
          <Step title="首页" description="您当前所在页面为首页" />
          <Step title="添加容器" description="添加一个容器非常简单,请执行redux g container ContainerName,然后刷新试试看。注:ContainerName不需要加Container后缀,会自动载入" />
          <Step title="添加子容器" description="为一个容器添加子容器也非常简单,请执行redux g subContainer ContainerName,该命令会在指定父容器的containers文件夹里为你生成一个sub.js,你需要手动在routes文件夹里配置路由信息" />
          <Step title="完成" description="enjoy it" />
        </Steps>
      </div>
    );
  }
}
