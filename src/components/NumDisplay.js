import React from "react";

const NumDisplay = props => {
  const { displayNum } = props;
  return <section className="numDisplay">{displayNum}</section>;
};

export default NumDisplay;
