import React from "react";

class User extends React.Component {
  state = {
    userGithub: ""
  };

  componentDidMount() {
    this.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProp) {
    if (this.props.match.params.userId !== prevProp.match.params.userId) {
      this.fetchUser(this.props.match.params.userId);
    }
  }

  fetchUser = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        this.setState({
          userGithub: data
        });
      });
  };

  render() {
    const { userGithub } = this.state;
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={userGithub.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{userGithub.name}</span>
          <span className="user__location">{userGithub.location}</span>
        </div>
      </div>
    );
  }
}

export default User;
