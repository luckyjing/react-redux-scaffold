import React, {Component, PropTypes} from 'react';

export default class DemoComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions} = this.props
  }

  render() {
    return (
      <div>
        <h1> 这是一个React组件 </h1>
      </div>
    );
  }
}

