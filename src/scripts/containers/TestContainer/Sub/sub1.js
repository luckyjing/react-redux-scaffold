import React, {Component, PropTypes} from 'react';
export default class Sub1 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions, state} = this.props;
    // actions.demo("Hello,这儿发起了一个actions,你可以直接发起你在redux定义的actions");
    console.log(this.props)
  }

  render() {
    return (
      <div>
        <hr/>
        <p> 我是子组件，当前页面内获取到的id是：{this.props.routeParams.id} </p>
      </div>
    );
  }
}
