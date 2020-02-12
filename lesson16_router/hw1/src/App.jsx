import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </BrowserRouter>
    </div>
  );
};

export default App;
