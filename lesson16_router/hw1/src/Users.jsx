import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import User from "./User";

const Users = ({ match }) => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to={`${match.url}/github`}>Github</Link>
        </li>
        <li className="navigation__item">
          <Link to={`${match.url}/facebook`}>Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.url}/:userId`} component={User} />
        <Route path="/users">Select a user please</Route>
      </Switch>
    </div>
  );
};

export default Users;
