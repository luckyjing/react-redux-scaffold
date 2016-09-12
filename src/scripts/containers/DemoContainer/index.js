import React, {Component, PropTypes} from 'react';
import Title from '../../components/Title';
import Section from '../../components/Section';
import {Tag, Button, Alert, Input,notification} from '@ali/dblx'

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
          <Title title="页面标题">
          </Title>
          <Section title="第一章节"/>
          <p>
            段落1
          </p>
          <Section title="第二章节"/>
          <p>
            段落2
          </p>
        </div>

      </div>
    );
  }
}
