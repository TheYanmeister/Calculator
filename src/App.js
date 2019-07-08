import React, { Component } from "react";
import "./App.css";
import NumDisplay from "./components/NumDisplay";

class App extends Component {
  state = {
    displayNum: 0
  };

  render() {
    const { displayNum } = this.state;
    return (
      <div className="App">
        <h1>Calculator</h1>
        <NumDisplay displayNum={displayNum} />
      </div>
    );
  }
}

export default App;
