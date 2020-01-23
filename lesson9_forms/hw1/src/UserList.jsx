import React, { Component } from "react";
import Filter from "./Filter";
import User from "./User";

class UserList extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    let users = this.props.users
      .filter(({ name }) =>
        !this.state.value
          ? true
          : name.toLowerCase() === this.state.value.toLowerCase()
      )
      .map(({ id, name, age }) => <User key={id} name={name} age={age} />);

    return (
      <>
        <Filter
          filterText={this.state.value}
          onChange={this.handleChange}
          count={users.length}
        />
        <div className="users">{users}</div>
      </>
    );
  }
}

export default UserList;
