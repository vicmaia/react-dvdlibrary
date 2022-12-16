import React, { Component } from "react";

class SearchValidation extends Component {
  render() {
    return (
      <div id="search-validation">
        <h4>{this.props.validationMessage}</h4>
      </div>
    );
  }
}

export default SearchValidation;
