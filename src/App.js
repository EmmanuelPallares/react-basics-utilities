import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    const notes = [
      {
        id: 1,
        name: "Recado de comida",
        lugar: "Valle de santiago",
        remitente: "Emmanuel",
        costoEnvio: 1400,
      },
      {
        id: 2,
        name: "Recado de comida 2",
        lugar: "Valle de santiago2",
        remitente: "Emmanuel2",
        costoEnvio: 14009,
      },
    ];
    return (
      <div>
        {notes.map((note) => {
          return note.id;
        })}
      </div>
    );
  }
}
