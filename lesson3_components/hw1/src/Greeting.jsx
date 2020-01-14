import React from "react";
import "./greeting.scss";

const Comment = props => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${props.birthDate} years old`}
    </div>
  );
};

export default Comment;
