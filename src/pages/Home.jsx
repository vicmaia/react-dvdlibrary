import axios from "axios";
import React, { Component } from "react";
import DvdDetails from "../components/DvdDetails";
import DvdForm from "../components/DvdForm";
import TablePage from "../components/TablePage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "table",
      dvds: null,
      dvd: null,
      showValidationError: false,
      validationMessage: null,
    };
    this.setState = this.setState.bind(this);
  }

  //get all dvds
  getDvds = async () => {
    try {
      let res = await axios.get(`http://dvd-library.us-east-1.elasticbeanstalk.com/dvds`);
      this.setState({ dvds: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getDvds();
  }

  //when you click dvd title, show details
  getDvd = async (id) => {
    try {
      let res = await axios.get(`http://dvd-library.us-east-1.elasticbeanstalk.com/dvd/${id}`);
      this.setState({ dvd: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  
  //show info by selection
  getDvdSearch = async (option, input) => {
    try {
      let res = await axios.get(
        `http://dvd-library.us-east-1.elasticbeanstalk.com/dvds/${option}/${input}`
      );
      this.setState({ dvds: res.data });
    } catch (error) {
      console.log(error);
    }
  };
  

  //create a dvd
  createDvd = async (newDvd) => {
    try {
      let res = await axios.post(`http://dvd-library.us-east-1.elasticbeanstalk.com/dvd`, {
        ...newDvd,
      });
      console.log("in post request", res.data);
      this.setState({ dvds: [...this.state.dvds, res.data], view: "table" });
    } catch (error) {
      console.log(error);
    }
  };

  


  render() {
    return (
      <div id="home">
        <div>
          {this.state.view === "table" && (
            <TablePage
              setHomeState={this.setState}
              dvds={this.state.dvds}
              getDvd={this.getDvd}
              getDvdSearch={this.getDvdSearch}
              showValidationError={this.state.showValidationError}
              validationMessage={this.state.validationMessage}
            />
          )}
          {this.state.view === "form" && (
            <DvdForm
              setHomeState={this.setState}
              dvd={this.state.dvd}
              createDvd={this.createDvd}
              showValidationError={this.state.showValidationError}
              validationMessage={this.state.validationMessage}
            />
          )}
          {this.state.view === "details" && this.state.dvd && (
            <DvdDetails setHomeState={this.setState} dvd={this.state.dvd} />
          )}
        </div>
      </div>
    );
  }
}

export default Home;
