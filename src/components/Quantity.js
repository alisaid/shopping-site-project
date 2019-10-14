import React from "react";
import ReactDOM from "react-dom";

export default class Counter extends React.Component {
  state = {
    amount: 0
  };

  componentDidMount = () => {
    const stringCount = localStorage.getItem("amount");
    const amount = parseInt(stringCount, 10);

    if (!isNaN(amount)) {
      this.setState(() => ({ amount }));
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.amount !== this.state.amount) {
      localStorage.setItem("amount", this.state.amount);
    }
  };
  handleAddOne = () => {
    this.setState(prevState => {
      return {
        amount: prevState.amount + 1
      };
    });
  };

  handleMinusOne = () => {
    this.setState(prevState => {
      return {
        amount: prevState.amount - 1
      };
    });
  };

  handleDelete = () => {
    this.setState(() => {
      return {
        amount: 0
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleMinusOne}>-</button>
        <form>
          <input type="value" value={this.state.amount} />
        </form>
        <button onClick={this.handleAddOne}>+</button>
        <button onClick={this.handleDelete}>Delete</button>
      </div>
    );
  }
}
