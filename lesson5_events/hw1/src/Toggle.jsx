import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Off"
    };
  }
  setSwitch = () => {
    if (this.state.text === "Off") {
      this.setState({ text: "On" });
    } else {
      this.setState({ text: "Off" });
    }
  };
  render() {
    return (
      <div onClick={() => this.setSwitch()} className="toggler">
        {this.state.text}
      </div>
    );
  }
}

export default Toggle;
