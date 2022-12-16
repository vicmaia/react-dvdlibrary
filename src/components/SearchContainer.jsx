import React, { Component } from "react";
import SearchDropdown from "./SearchDropdown";
import SearchInput from "./SearchInput";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOption: null,
      searchInput: null,
    };
    this.setSearchState = this.setState.bind(this);
  }

  checkNullSearch = () => {
    if (!this.state.searchOption || !this.state.searchInput) {
      this.props.setHomeState({
        showValidationError: true,
        validationMessage: "Both Search Category and Search Term are required.",
      });
    } else {
      this.props.setHomeState({
        showValidationError: false,
        validationMessage: null,
      });
      this.handleSearchCall();
    }
  };

  handleSearchCall = () => {
    this.props.getDvdSearch(this.state.searchOption, this.state.searchInput);
  };

  render() {
    return (
      <div id="search-container">
        <button onClick={this.checkNullSearch}>Search</button>
        <SearchDropdown setSearchState={this.setSearchState} />
        <SearchInput setSearchState={this.setSearchState} />
      </div>
    );
  }
}

export default SearchContainer;
