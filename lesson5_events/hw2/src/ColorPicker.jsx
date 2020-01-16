import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }
  showColor = name => {
    this.setState({
      color: name
    });
  };

  hideColorName = () => {
    this.setState({
      color: value
    });
  };

  render() {
    return (
      <>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseOver={() => this.showColor("Coral")}
            onMouseOut={this.hideColorName}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={() => this.showColor("Aqua")}
            onMouseOut={this.hideColorName}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={() => this.showColor("Bisque")}
            onMouseOut={this.hideColorName}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </>
    );
  }
}

export default ColorPicker;
