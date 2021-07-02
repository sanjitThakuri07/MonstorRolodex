import logo from "./logo.svg";

import React, { Component } from "react";

import CardList from "./component/card-list/card-list.component";
import "./App.css";

import SearchBox from "./component/searchBox/searchBox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchMonster: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // our own methods
  handleChange = (e) => {
    this.setState({ searchMonster: e.target.value });
  };

  render() {
    const { monsters, searchMonster } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchMonster.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="heading">Monster Rolodox</h1>
        {/* <input
          type="search"
          placeholder="search your favourite monsters"
          onChange={(e) => this.setState({ searchMonster: e.target.value })}
        /> */}
        <SearchBox
          placeholder="search your favourite monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
