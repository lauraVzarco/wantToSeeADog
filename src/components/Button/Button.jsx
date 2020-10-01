import React from "react";
import "./Button.css";

function Button({ text, onClick }) {
  return (
    <div className="buttonDiv">
      <button className="button" onClick={onClick}>
        {" "}
        {text}{" "}
      </button>
    </div>
  );
}

export default Button;
