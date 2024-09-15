import React from "react";

const Todo = (props) => {
  return (
    <div>
      <p
        style={
          props.todo.completed
            ? { textDecoration: "line-through" }
            : { textDecoration: "" }
        }
      >
        {props.todo.name}
      </p>
      <button onClick={() => props.handleCompleted(props.todo.id)}>
        {" "}
        {props.todo.completed ? "Not " : ""}Completed
      </button>
    </div>
  );
};

export default Todo;
