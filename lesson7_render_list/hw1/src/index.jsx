import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import TransactionsList from "./TransactionsList";

const rootElement = document.querySelector("#root");

ReactDOM.render(<TransactionsList />, rootElement);
