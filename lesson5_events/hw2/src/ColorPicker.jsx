import React, { Component } from "react";

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ""
    };
  }
  showColorAqua = event => {
    this.setState({
      color: "Aqua"
    });
  };
  showColorCoral = event => {
    this.setState({
      color: "Coral"
    });
  };
  showColorBisque = event => {
    this.setState({
      color: "Bisque"
    });
  };

  hideColorName = () => {
    this.setState({
      color: ""
    });
  };

  render() {
    return (
      <>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            onMouseOver={this.showColorCoral}
            onMouseOut={this.hideColorName}
            className="picker__button picker__button_coral"
          ></button>
          <button
            onMouseOver={this.showColorAqua}
            onMouseOut={this.hideColorName}
            className="picker__button picker__button_aqua"
          ></button>
          <button
            onMouseOver={this.showColorBisque}
            onMouseOut={this.hideColorName}
            className="picker__button picker__button_bisque"
          ></button>
        </div>
      </>
    );
  }
}

export default ColorPicker;
