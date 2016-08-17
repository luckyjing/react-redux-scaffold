import React, {Component, PropTypes} from 'react';

export default class TestContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions,state} = this.props;
  }

  render() {
    return (
      <div>
        <h1>
        TestContainer
        </h1>
        {this.props.children}
      </div>
    );
  }
}
