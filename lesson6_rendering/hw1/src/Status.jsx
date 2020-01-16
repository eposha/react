import React, { Component } from "react";
import Online from "./Online";
import Offline from "./Offline";

const Status = ({ status }) => {
  const connection = status ? <Online /> : <Offline />;
  return connection;
};

export default Status;
