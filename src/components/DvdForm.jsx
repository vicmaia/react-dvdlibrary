import React, { Component } from "react";
import DvdFormRow from "./DvdFormRow";
import SearchValidation from "./SearchValidation";

class DvdForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.dvd ? this.props.dvd.title : null,
      releaseYear: this.props.dvd ? this.props.dvd.releaseYear : null,
      director: this.props.dvd ? this.props.dvd.director : null,
      rating: this.props.dvd ? this.props.dvd.rating : null,
      notes: this.props.dvd ? this.props.dvd.notes : null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newDvd = { ...this.state };
    this.checkNullProperties(newDvd);
  };

  checkNullProperties = (newDvd) => {
    // Check for null values
    if (Object.values(newDvd).indexOf(null) > -1) {
      this.props.setHomeState({
        showValidationError: true,
        validationMessage: "All Fields Are Required",
      });
    } else {
      this.props.setHomeState({
        showValidationError: false,
        validationMessage: null,
      });
      this.checkYearValidity(newDvd);
    }
  };

  checkYearValidity = (newDvd) => {
    newDvd.releaseYear = Number(newDvd.releaseYear);
    if (typeof newDvd.releaseYear !== "number") {
      this.props.setHomeState({
        showValidationError: true,
        validationMessage: "Release Year must be a number.",
      });
    } else if (String(newDvd.releaseYear).length !== 4) {
      this.props.setHomeState({
        showValidationError: true,
        validationMessage: "Release Year must have 4 digits.",
      });
    } else {
      this.props.setHomeState({
        showValidationError: false,
        validationMessage: null,
      });
      this.handlePostRequest(newDvd);
    }
  };

  handlePostRequest = (newDvd) => {
    this.props.createDvd(newDvd);
  };

  render() {
    return (
      <div id="dvd-form-container">
        <h1>DvdForm</h1>
        <hr />
        {this.props.showValidationError && (
          <SearchValidation validationMessage={this.props.validationMessage} />
        )}
        <form id="dvd-form" onSubmit={this.handleSubmit}>
          <DvdFormRow>
            <label for="title">Dvd Title: </label>
            <input
              id="title"
              placeholder="Enter Title"
              value={this.state.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
          </DvdFormRow>

          <DvdFormRow>
            <label for="releaseYear">Release Year: </label>
            <input
              type="number"
              id="releaseYear"
              placeholder="Enter Release Year"
              value={this.state.releaseYear}
              onChange={(e) => this.setState({ releaseYear: e.target.value })}
            />
          </DvdFormRow>

          <DvdFormRow>
            <label for="director">Director: </label>
            <input
              id="director"
              placeholder="Enter Director"
              value={this.state.director}
              onChange={(e) => this.setState({ director: e.target.value })}
            />
          </DvdFormRow>

          <DvdFormRow>
            <label for="rating">Rating: </label>
            <select
              id="rating"
              onChange={(e) => this.setState({ rating: e.target.value })}
            >
              <option disabled selected>
                Choose Rating
              </option>
              <option value="G">G</option>
              <option value="PG">PG</option>
              <option value="PG-13">PG-13</option>
              <option value="R">R</option>
            </select>
          </DvdFormRow>

          <DvdFormRow>
            <label for="notes">Notes: </label>
            <textarea
              id="notes"
              placeholder="Enter Note"
              value={this.state.notes}
              onChange={(e) => this.setState({ notes: e.target.value })}
            />
          </DvdFormRow>

          <div className="button-container">
            <button onClick={() => this.props.setHomeState({ view: "table" })}>
              Cancel
            </button>
            <button type="submit">
              {this.props.dvd ? "Edit" : "Create"} Dvd
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default DvdForm;
