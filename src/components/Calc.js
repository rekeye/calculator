import React from "react";

export default function Calc(props) {
  return (
    <div id="calc" className="calc">
      <button
        id="clear"
        className="calc__button calc__clear center white"
        onClick={props.handleClear}
      >
        AC
      </button>
      <button
        id="divide"
        className="calc__button calc__operator center white"
        onClick={props.handleOperator}
      >
        /
      </button>
      <button
        id="multiply"
        className="calc__button calc__operator center white"
        onClick={props.handleOperator}
      >
        *
      </button>

      <button
        id="seven"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        7
      </button>
      <button
        id="eight"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        8
      </button>
      <button
        id="nine"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        9
      </button>
      <button
        id="add"
        className="calc__button calc__operator center white"
        onClick={props.handleOperator}
      >
        +
      </button>

      <button
        id="four"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        4
      </button>
      <button
        id="five"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        5
      </button>
      <button
        id="six"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        6
      </button>
      <button
        id="subtract"
        className="calc__button calc__operator center white"
        onClick={props.handleOperator}
      >
        -
      </button>

      <button
        id="one"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        1
      </button>
      <button
        id="two"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        2
      </button>
      <button
        id="three"
        className="calc__button calc__num center"
        onClick={props.handleNumber}
      >
        3
      </button>
      <button
        id="equals"
        className="calc__button calc__equals center white"
        onClick={props.handleEnter}
      >
        =
      </button>

      <button
        id="zero"
        className="calc__button calc__num calc__num--zero center"
        onClick={props.handleNumber}
      >
        0
      </button>
      <button
        id="decimal"
        className="calc__button calc__num center"
        onClick={props.handleDecimal}
      >
        .
      </button>
    </div>
  );
}
