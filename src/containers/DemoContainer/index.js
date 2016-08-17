import React, {Component, PropTypes} from 'react';

export default class DemoContainer extends Component {
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
        DemoContainer
        </h1>
        {this.props.children}
      </div>
    );
  }
}
