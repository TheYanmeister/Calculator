import React, { Component } from "react";
import "./App.css";
import NumDisplay from "./components/NumDisplay";
import NumberButtons from "./components/NumberButtons";

class App extends Component {
  state = {
    displayNum: "0"
  };

  handleNumClick = num => {
    if (this.state.displayNum === "0") {
      this.setState({
        displayNum: String(num)
      });
    } else
      this.setState(prevState => ({
        displayNum: prevState.displayNum + num
      }));
  };

  render() {
    const { displayNum } = this.state;
    return (
      <div className="App">
        <h1>Calculator</h1>
        <NumDisplay displayNum={displayNum} /> <br />
        <NumberButtons handleNumClick={this.handleNumClick} />
      </div>
    );
  }
}

export default App;
