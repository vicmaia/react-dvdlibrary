import React, { Component } from "react";

class DvdFormRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="dvd-form-row">{this.props.children}</div>;
  }
}

export default DvdFormRow;
