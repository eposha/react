import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UserList from "./UserList";

const rootElement = document.querySelector("#root");

const users = [
  {
    age: 21,
    name: "Bob"
  },
  {
    age: 17,
    name: "Tob"
  },
  {
    age: 18,
    name: "Tad"
  },
  {
    age: 45,
    name: "Sam"
  }
];

ReactDOM.render(<UserList users={users} />, rootElement);
