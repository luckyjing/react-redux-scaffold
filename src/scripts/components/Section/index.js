import React, {Component, PropTypes} from 'react';
import {Row,Col} from '@ali/dblx';
export default class SectionComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <Row className="text-section-row">
        <Col span="12">
          <p className="text-section">
            {this.props.title}
          </p>
        </Col>
      </Row>
    );
  }
}
