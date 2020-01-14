import React from "react";
import Greeting from "./Greeting";
import "./app.scss";

const App = () => {
  return <Greeting firstName="John" lastName="Doe " birthDate={17} />;
};

export default App;
