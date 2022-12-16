import React, { Component } from "react";

class DvdDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.dvd.id,
      title: this.props.dvd.title,
      releaseYear: this.props.dvd.releaseYear,
      director: this.props.dvd.director,
      rating: this.props.dvd.rating,
      notes: this.props.dvd.notes,
    };
  }

  returnHome = () => {
    this.props.setHomeState({ view: "table", dvd: null });
  };

  render() {
    return (
      <div>
        <div>
          <h3>{this.props.dvd.title}</h3>
          <hr />
          <p>Release Year: {this.props.dvd.releaseYear}</p>
          <p>Director: {this.props.dvd.director}</p>
          <p>Rating: {this.props.dvd.rating}</p>
          <p>Notes: {this.props.dvd.notes}</p>
        </div>
        <button onClick={this.returnHome}>Back</button>
      </div>
    );
  }
}

export default DvdDetails;
