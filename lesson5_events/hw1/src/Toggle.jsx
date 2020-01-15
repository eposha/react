import React, { Component } from "react";

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div onClick={this.handleClick} className="toggler">
        {this.state.isToggleOn ? "On" : "Off"}
      </div>
    );
  }
}

export default Toggle;
