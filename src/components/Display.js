import React from "react";

export default function Equals(props) {
  return (
    <div className="display">
      <div className="red">{props.calculation}</div>
      <div id="display">{props.typed}</div>
    </div>
  );
}
