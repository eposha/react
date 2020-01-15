import React from "react";
import Counter from "./Counter";
// import "./app.scss";

function App() {
  return (
    <>
      <Counter start={0} interval={500} />
      <Counter start={0} interval={1000} />
    </>
  );
}
export default App;
