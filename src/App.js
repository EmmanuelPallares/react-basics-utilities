import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { SearchBox } from "./components/search-box/search";

import React, { Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, search } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );
    return (
      <div className="App">
        <h1>React Monsters</h1>
        <SearchBox
          placeholder="Search the monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}
