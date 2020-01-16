import React, { Component } from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      isLogout: false,
      spinner: false
    };
  }

  showLogout = () => {
    this.setState({
      isLogin: false,
      spinner: true
    });
    setTimeout(() => {
      this.setState({
        isLogout: true,
        spinner: false
      });
    }, 2000);
  };

  hideLogout = () => {
    this.setState({
      isLogout: false,
      isLogin: true
    });
  };

  render() {
    return (
      <>
        {this.state.isLogin && <Login showLogout={this.showLogout} />}
        {this.state.isLogout && <Logout hideLogout={this.hideLogout} />}
        {this.state.spinner && <Spinner size={"25px"} />}
      </>
    );
  }
}

export default Auth;
