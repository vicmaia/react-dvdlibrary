import React, { Component } from "react";
import CreateDvdButton from "./CreateDvdButton";
import SearchContainer from "./SearchContainer";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="navbar">
        <div>
          <CreateDvdButton setHomeState={this.props.setHomeState} />
        </div>
        <div>
          <SearchContainer
            getDvdSearch={this.props.getDvdSearch}
            setHomeState={this.props.setHomeState}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
