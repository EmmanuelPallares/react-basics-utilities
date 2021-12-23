import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: [
        {
          name: "Pikachu",
          id: "id1",
        },

        { name: "Bolvasour", id: "id1" },
        { name: "Charizard", id: "id2" },
        { name: "Snorglax", id: "id3" },
        { name: "Squero" },
      ],
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Function .map()</h1>

            <div>
              {this.state.pokemons.map((pokemon) => (
                <h1 key={pokemon.id}>{pokemon.name}</h1>
              ))}
            </div>
          </header>
        </div>
      </div>
    );
  }
}
