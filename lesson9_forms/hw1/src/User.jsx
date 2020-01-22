import React from "react";

const User = ({ users }) => {
  return users.map(user => (
    <li key={user.id} className="user">
      <span className="user__name">{user.name}</span>
      <span className="user__age">{user.age}</span>
    </li>
  ));
};

export default User;
