import React, { Component } from "react";
import "./App.css";
import DisplayBox from "./app_components/DisplayBox.js";
import axios from "axios";

class App extends Component {
  state = { dataRetrieved: [], currentWord: "" };

  queryWord = () => {
    axios
      .get(
        `https://googledictionaryapi.eu-gb.mybluemix.net/?define=${
          this.state.currentWord
        }`
      )
      .then(response => {
        this.updateMeaningsRetreived(response.data);
      })
      .catch(error => console.log(error));
  };

  updateMeaningsRetreived = response => {
    this.setState({ dataRetrieved: response });
  };

  handleWordChange = event => {
    this.setState({ currentWord: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <div className="Text-entry">
          <textarea rows="1" textarea="50" onChange={this.handleWordChange} />
        </div>
        <div className="Send-button">
          <button type="button" onClick={this.queryWord}>
            Look it up!
          </button>
        </div>
        <DisplayBox data={this.state.dataRetrieved} />
      </div>
    );
  }
}

export default App;
