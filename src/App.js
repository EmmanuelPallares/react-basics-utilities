import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      string: "String from class name",
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
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
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}
