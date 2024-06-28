import React from "react";

function Button({ children, color, bgColor, text }) {
  return (
    <div>
      <button className={(color, bgColor)}>{children}</button>
    </div>
  );
}

export default Button;
