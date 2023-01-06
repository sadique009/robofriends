import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: [],
      searchField: "",
    };
    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((users) => {
        this.setState({ robot: users });
      });

    console.log("componentDidMount");
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { robot, searchField } = this.state;
    const filterRobots = robot.filter((res) => {
      return res.name.toLowerCase().includes(searchField.toLowerCase());
    });
    console.log("render");

    return !robot.length /* alternate way: robot.length===0 */ ? (
      <h1>loading...</h1>
    ) : (
      <>
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <Cardlist robot={filterRobots} />
          </Scroll>
        </div>
      </>
    );
  }
}

export default App;
