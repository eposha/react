import React from "react";

const scaleNames = {
  c: "Цельсия",
  f: "Фаренгейта"
};

class TemperatureInput extends React.Component {
  handleChange = event => {
    this.props.onTemperatureChange(event.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Введите температуру в градусах {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
