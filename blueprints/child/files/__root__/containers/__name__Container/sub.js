import React, {Component, PropTypes} from 'react';

export default class <%= pascalEntityName %>Container extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions} = this.props
  }

  render() {
    return (
      <div>
        <h2>
        <%= pascalEntityName %> Sub Container
        </h2>
      </div>
    );
  }
}
