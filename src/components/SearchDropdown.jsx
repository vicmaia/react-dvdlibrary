import React, { Component } from "react";

class SearchDropdown extends Component {
  constructor(props) {
    super(props);
  }

  setSearchOption = (option) => {
    console.log("setSearchOption", option);
    this.props.setSearchState({
      searchOption: option,
    });
  };

  render() {
    return (
      <div id="search-dropdown">
        <select onChange={(e) => this.setSearchOption(e.target.value)}>
          <option selected disabled default>
            Search Category
          </option>
          <option value="title">Title</option>
          <option value="year">Release Date</option>
          <option value="director">Director</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
}

export default SearchDropdown;
