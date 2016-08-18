import React, {Component, PropTypes} from 'react';

export default class JingXinContainer extends Component {
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
        JingXin Sub Container
        </h2>
      </div>
    );
  }
}
