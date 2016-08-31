import React, {Component, PropTypes} from 'react';
import {Input,Row,Col,Radio} from '@ali/dblx';
const InputGroup = Input.Group;
const RadioGroup = Radio.Group;
export default class FormContainer extends Component {
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

        <RadioGroup >
          <Radio key="a" value={1}>A</Radio>
          <Radio key="b" value={2}>B</Radio>
          <Radio key="c" value={3}>C</Radio>
          <Radio key="d" value={4}>D</Radio>
        </RadioGroup>
        <InputGroup size="large">
          <Col span="4">
            <Input defaultValue="0571" />
          </Col>
          <Col span="8">
            <Input defaultValue="26888888" />
          </Col>
        </InputGroup>
      </div>
    );
  }
}
