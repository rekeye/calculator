import React from "react";
import "./styles.scss";
import Display from "./components/Display";
import Calc from "./components/Calc";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "0",
      calculation: ""
    };
    this.handleClear = this.handleClear.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }
  handleClear() {
    this.setState({
      calculation: "",
      current: "0"
    });
  }
  handleNumber(event) {
    event.persist();
    const { current, calculation } = this.state;
    const value = event.target.innerHTML;
    this.setState({
      current:
        (current === "0" || /[+-/*]/.test(current)) &&
        /[.]/.test(current) === false
          ? value
          : current + value,
      calculation: calculation + value
    });
  }
  handleDecimal() {
    const { current, calculation } = this.state;
    if (/[.]/.test(current)) return;
    if (current === "0") {
      this.setState({
        current: "0.",
        calculation: calculation === "" ? "0." : calculation + "0."
      });
    } else {
      this.setState({
        current: current + ".",
        calculation: calculation + "."
      });
    }
  }
  handleOperator(event) {
    event.persist();
    const { current, calculation } = this.state;
    const value = event.target.innerHTML;

    this.setState({
      current: value,
      calculation:
        /[+/*]/.test(current) && value !== "-"
          ? calculation.substring(0, calculation.length - 1) + value
          : /[-]/.test(current) && value !== "-"
          ? calculation.substring(0, calculation.length - 2) + value
          : calculation + value
    });
  }
  handleEnter() {
    const { calculation } = this.state;
    const equal = eval(calculation);
    this.setState({
      current: equal,
      calculation: equal
    });
  }
  render() {
    return (
      <div className="App">
        <div>
          <Display
            typed={this.state.current}
            calculation={this.state.calculation}
            equals={this.state.equals}
          />
          <Calc
            handleClear={this.handleClear}
            handleNumber={this.handleNumber}
            handleDecimal={this.handleDecimal}
            handleOperator={this.handleOperator}
            handleEnter={this.handleEnter}
          />
        </div>
      </div>
    );
  }
}
