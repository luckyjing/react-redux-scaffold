import React, {Component, PropTypes} from 'react';

export default class FontContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {actions,state} = this.props;
    actions.demo("Hello,这儿发起了一个actions,你可以直接发起你在redux定义的actions");
    actions.getInfo();
  }

  render() {
    return (
      <div>
        <p className="text-delete">删除我</p>
        <p className="text-primary text-lg text-capitalize">text-primary</p>
        <p className="text-muted text-md">text-muted</p>
        <p className="text-success">text-success</p>
        <p className="text-warning">text-warning</p>
        <p className="text-danger">text-danger</p>
      </div>
    );
  }
}
