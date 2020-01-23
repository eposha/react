import React, { Component } from "react";
import Filter from "./Filter";
import User from "./User";

class UserList extends Component {
  state = {
    value: ""
  };

  users = this.props.users; // do not write same codes

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
    this.users = this.props.users.filter(
      ({ name }) => name === this.state.value
    );
  };

  render() {
    return (
      <>
        <Filter
          filterText={this.state.value}
          onChange={this.handleChange}
          count={this.users.length}
        />
        <div className="users">
          <User users={this.users} />
        </div>
      </>
    );
  }
}

export default UserList;
