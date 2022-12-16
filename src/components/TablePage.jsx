import React, { Component } from "react";
import DvdTable from "./DvdTable";
import DvdTableRow from "./DvdTableRow";
import Navbar from "./Navbar";
import SearchValidation from "./SearchValidation";

class TablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dvds: props.dvds,
    };
  }

  renderDvds = () => {
    return this.state.dvds.map((dvd) => {
      return (
        <DvdTableRow
          key={dvd.id}
          id={dvd.id}
          title={dvd.title}
          releaseYear={dvd.releaseYear}
          director={dvd.director}
          rating={dvd.rating}
          getDvd={this.props.getDvd}
          setHomeState={this.props.setHomeState}
        />
      );
    });
  };

  render() {
    return (
      <div id="table-page">
        <Navbar
          setHomeState={this.props.setHomeState}
          getDvdSearch={this.props.getDvdSearch}
        />
        {this.props.showValidationError && (
          <SearchValidation validationMessage={this.props.validationMessage} />
        )}
        <DvdTable>{this.state.dvds && this.renderDvds()}</DvdTable>
      </div>
    );
  }

  // Sets props as state before component mounts
  // link = [ https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops ]
  static getDerivedStateFromProps(props, state) {
    return {
      dvds: props.dvds,
    };
  }
}

export default TablePage;
