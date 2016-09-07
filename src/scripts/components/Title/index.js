import React, {Component, PropTypes} from 'react';
import {Row, Col} from '@ali/dblx';
export default class TitleComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Row className="text-title-row">
        <Col span="12">
          <p className="text-title">
            {this.props.title}
          </p>
        </Col>
        <Col span="12" >
          {this.props.children}
        </Col>
      </Row>
    );
  }
}