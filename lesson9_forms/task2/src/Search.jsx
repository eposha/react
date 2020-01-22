import React from "react";
import UserForm from "./UserForm";

class Search extends React.Component {
  state = {
    name: "",
    student: "",
    occupation: "",
    about: ""
  };

  handleChange = event => {
    const { name, value, checked, type } = event.target;

    const val = type === "checkbox" ? checked : value;

    this.setState({
      [name]: val
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <UserForm
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default Search;
