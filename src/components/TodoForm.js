import React, { useEffect } from "react";

const Form = (props) => {
  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        document.getElementById("submit").click();
      }
    });
  }, []);

  return (
    <div className="container">
      <label>Next Todo</label>
      <input value={props.input} onChange={props.change} />
      <div className="buttonContainer">
        <button className="buttonForm" id="submit" onClick={props.submit}>
          Add Todo
        </button>
        <button className="buttonForm" onClick={props.clear}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};

export default Form;
