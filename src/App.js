import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "Try to change this string",
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>{this.state.string}</p>

            <button
              onClick={() => {
                this.setState({ string: "Text Changed" });
              }}
            >
              Change the string from this button
            </button>
            <button
              onClick={() => {
                this.setState({ string: "String from class name" });
              }}
            >
              Reset Changes
            </button>
          </header>
        </div>
      </div>
    );
  }
}
