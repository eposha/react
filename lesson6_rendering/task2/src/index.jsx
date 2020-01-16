import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import MailBox from "./MailBox";

const rootElement = document.querySelector("#root");

ReactDOM.render(<MailBox unreadMessages={[5]} />, rootElement);
