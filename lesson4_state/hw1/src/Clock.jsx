import React, { Component } from "react";
import moment from "moment";
import "./counter.scss";

const formatTime = offset => {
  return moment()
    .utcOffset(offset)
    .format("h:mm:ss A");
};

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      timeZone: 0
    };

    setInterval(() => {
      this.setState({
        timeZone: formatTime(props.offset)
      });
    }, 1000);
  }

  render() {
    return (
      <>
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.timeZone}</div>
      </>
    );
  }
}

export default Clock;
