import React from "react";

const NumberButtons = props => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(num => (
    <button key={num} onClick={() => props.handleNumClick(num)}>
      {num}
    </button>
  ));
};

export default NumberButtons;
