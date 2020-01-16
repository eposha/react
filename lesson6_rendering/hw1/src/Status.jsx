import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";

class Status extends Component {
  render() {
    return (
      <>
        <Online />
        <Offline />
      </>
    );
  }
}

export default Status;
