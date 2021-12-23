import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div>
        <div className="App">
          {this.state.monsters.map((monster) => (
            <h1>{monster.name}</h1>
          ))}
        </div>
      </div>
    );
  }
}
