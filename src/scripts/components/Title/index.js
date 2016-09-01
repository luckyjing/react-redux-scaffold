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
        <Col>
          <p className="text-title">
            {this.props.title}
          </p>
        </Col>
      </Row>
    );
  }
}
