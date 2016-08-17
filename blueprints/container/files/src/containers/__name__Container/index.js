import React, {Component, PropTypes} from 'react';

export default class <%= pascalEntityName %>Container extends Component {
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
        <%= pascalEntityName %>Container
        </h1>
        {this.props.children}
      </div>
    );
  }
}
