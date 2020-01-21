import React, { Component } from "react";

class ConnectionStatus extends Component {
  state = {
    status: "online"
  };
  componentDidMount() {
    window.addEventListener("online", this.connectionStatus);
    window.addEventListener("offline", this.connectionStatus);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.connectionStatus);
    window.removeEventListener("offline", this.connectionStatus);
  }
  connectionStatus = event => {
    this.setState({
      status: event.type
    });
  };

  render() {
    const statusClass = this.state.status === "offline" ? "status_offline" : "";

    return <div className={`status ${statusClass}`}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;
