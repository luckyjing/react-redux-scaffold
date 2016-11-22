import React, {Component, PropTypes} from 'react';
import {Tag, Button, Alert, Input, notification} from 'antd'

export default class DemoContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions, state} = this.props;
    actions.demo("Hello,这儿发起了一个actions,你可以直接发起你在redux定义的actions");
    actions.getInfo();
  }


  render() {

    return (
      <div>
      </div>
    );
  }
}
