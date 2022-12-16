import React, { Component } from "react";
import DeleteButton from "./DeleteButton";

class DvdTableRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      title: this.props.title,
      releaseYear: this.props.releaseYear,
      director: this.props.director,
      rating: this.props.rating,
    };
  }

  handleTitleClick = () => {
    this.props.getDvd(this.props.id);
    this.props.setHomeState({ view: "details" });
  };

  

  render() {
    return (
      <>
        <tr className="dvd-table-row">
          <td className="dvd-title" onClick={this.handleTitleClick}>
            {this.state.title}
          </td>
          <td>{this.state.releaseYear}</td>
          <td>{this.state.director}</td>
          <td>{this.state.rating}</td>
          <td>Edit | <DeleteButton dvdId={this.props.id} /></td>
        </tr>
      </>
    );
  }
}

export default DvdTableRow;
