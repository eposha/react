import React from "react";
import User from "./User";

const Users = () => {
  return (
    <div class="page__content">
      <h1>Users</h1>
      <ul class="navigation">
        <li class="navigation__item">
          <a href="/users/github">Github</a>
        </li>
        <li class="navigation__item">
          <a href="/users/facebook">Facebook</a>
        </li>
      </ul>
    </div>
  );
};

export default Users;
