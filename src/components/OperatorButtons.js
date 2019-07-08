import React from "react";

const OperatorButtons = props => {
  return ["+", "-", "x", "÷"].map(operator => (
    <button
      key={operator}
      onClick={() => props.handleOperation(operator)}
      disabled={props.currentOperator !== null}
    >
      {operator}
    </button>
  ));
};

export default OperatorButtons;
