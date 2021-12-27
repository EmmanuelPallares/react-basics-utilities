import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";

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
  {
    id: 3,
    name: "Recado de comida 2",
    lugar: "Valle de santiago2",
    remitente: "Emmanuel2",
    costoEnvio: 14009,
  },
  {
    id: 4,
    name: "Recado de comida 2",
    lugar: "Valle de santiago2",
    remitente: "Emmanuel2",
    costoEnvio: 14009,
  },
  {
    id: 5,
    name: "Recado de comida 2",
    lugar: "Valle de santiago2",
    remitente: "Emmanuel2",
    costoEnvio: 14009,
  },
  {
    id: 6,
    name: "Recado de comida 2",
    lugar: "Valle de santiago2",
    remitente: "Emmanuel2",
    costoEnvio: 14009,
  },
];

const Note = ({ note }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>{note.name}</li>
      ))}
    </ul>
  );
};

export default function App() {
  return (
    <ol>
      {notes.map((note) => {
        <Note note={note.id} />;
      })}
      ;
    </ol>
  );
}
