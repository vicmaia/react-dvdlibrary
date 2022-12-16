import React, { Component } from "react";

class SearchInput extends Component {
  constructor(props) {
    super(props);
  }

  setSearchInput = (input) => {
    console.log("setSearchInput", input);
    this.props.setSearchState({ searchInput: input });
  };

  render() {
    return (
      <>
        <input onChange={(e) => this.setSearchInput(e.target.value)} />
      </>
    );
  }
}

export default SearchInput;
