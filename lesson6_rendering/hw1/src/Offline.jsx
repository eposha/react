import React, { Component } from "react";

class Offline extends Component {
  render() {
    return (
      <>
        <span>Offline</span>
        <button className="btn">Reconnect</button>
      </>
    );
  }
}

export default Offline;
