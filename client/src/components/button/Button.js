import React from "react";
import "./button.css";

const Button = ({ text, bg, color }) => {
  let styles = {
    backgroundColor: bg,
    color: color,
  };

  return (
    <div className="btn-body" style={styles}>
      <div className="btn-text">{text}</div>
    </div>
  );
};

export default Button;
