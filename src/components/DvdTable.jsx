import React, { Component } from "react";

class DvdTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="dvd-table-container">
        <table className="dvd-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Release Date</th>
              <th>Director</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.props.children}</tbody>
        </table>
      </div>
    );
  }
}

export default DvdTable;
