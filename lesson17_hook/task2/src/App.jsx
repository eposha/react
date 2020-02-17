import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import User from "./User";

const App = () => {
  const url = "https://api.github.com/users";
  return (
    <BrowserRouter>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to={`/github`}>Github</Link>
          </li>
          <li className="navigation__item">
            <Link to={`/facebook`}>Facebook</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path={"/:userId"}>
          <User />
        </Route>
        <Route exact path="/">
          Select a user please
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
