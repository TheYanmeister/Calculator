import React, { Component } from "react";
import "./App.css";
import NumDisplay from "./components/NumDisplay";
import NumberButtons from "./components/NumberButtons";
import OperatorButtons from "./components/OperatorButtons";

class App extends Component {
  state = {
    displayNum: "0",
    secondNum: "0",
    currentOperator: null
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

  clearButton = () => {
    this.setState({ displayNum: "0", secondNum: "0" });
  };

  handleOperation = operator => {
    this.setState(prevState => ({
      secondNum: prevState.displayNum,
      displayNum: "0",
      currentOperator: operator
    }));
  };

  handleEquals = () => {
    const { currentOperator } = this.state;
    if (currentOperator === null) return;
    else {
      const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        x: (a, b) => a * b,
        "÷": (a, b) => a / b
      };

      return this.setState(prevState => ({
        displayNum: String(
          operations[currentOperator](
            +prevState.secondNum,
            +prevState.displayNum
          )
        ),
        secondNum: "0",
        currentOperator: null
      }));
    }
  };

  componentDidUpdate() {
    const { displayNum } = this.state;
    if (isNaN(displayNum)) this.setState({ displayNum: "0" });
  }

  render() {
    const { displayNum, currentOperator } = this.state;
    return (
      <div className="App">
        <h1>Calculator</h1>
        <NumDisplay displayNum={displayNum} /> <br />
        <NumberButtons handleNumClick={this.handleNumClick} />
        <button onClick={this.clearButton}>Clear</button> <br />
        <OperatorButtons
          handleOperation={this.handleOperation}
          currentOperator={currentOperator}
        />
        <button onClick={this.handleEquals}>=</button>
      </div>
    );
  }
}

export default App;
