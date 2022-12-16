import React, { Component } from "react";

class CreateDvdButton extends Component {
  constructor(props) {
    super(props);
  }

  showFormView = () => {
    this.props.setHomeState({ view: "form" });
  };

  render() {
    return (
      <div id="create-dvd-button">
        <button onClick={this.showFormView}>Create Dvd</button>
      </div>
    );
  }
}

export default CreateDvdButton;
