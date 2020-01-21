import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
  state = {
    visible: true
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible
    });
  };

  render() {
    return (
      <>
        <button className="btn" onClick={this.toggle}>
          Toggle
        </button>
        <div>{this.state.visible && <Clock />}</div>
      </>
    );
  }
}

export default App;
