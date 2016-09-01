import React, {Component, PropTypes} from 'react';
import Title from '../../components/Title';
import {Tag, Steps,Alert,Input} from '@ali/dblx'
const Step = Steps.Step;

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
        <div>
          <Title title="页面标题" />
        </div>

      </div>
    );
  }
}
