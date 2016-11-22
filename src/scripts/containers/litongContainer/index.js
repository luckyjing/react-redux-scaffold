import React, {Component, PropTypes} from 'react';
import {Button} from 'antd'
export default class LitongContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions,state} = this.props;
    actions.demo("Hello,这儿发起了一个actions,你可以直接发起你在redux定义的actions");
    actions.getInfo();
    actions.test();
  }

  render() {
    return (
      <div>
        <h1> LitongContainer </h1>
        <Button type={'primary'}>
          {this.props.state.name}
        </Button>
        {this.props.children}
      </div>
    );
  }
}
