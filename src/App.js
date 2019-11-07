import { hot } from "react-hot-loader/root";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  render() {
    return (
      <div>
        <p>
          Hello {this.props.name} {this.state.counter} times!!!
        </p>
        <button
          className="btn-inc"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

export default hot(App);
