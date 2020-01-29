import React from "react";
import TasksList from "./TasksList";
import PropTypes from "prop-types";

const TodoList = () => {
  return (
    <>
      <h1 className="title">Todo List</h1>
      <TasksList />
    </>
  );
};

// Expand.propTypes = {
//   isOpen: PropTypes.bool,
//   children: PropTypes.element.isRequired,
//   title: PropTypes.string,
//   onClose: PropTypes.func.isRequired
// };

// Expand.defaultProps = {
//   isOpen: false,
//   title: ""
// };

export default TodoList;
