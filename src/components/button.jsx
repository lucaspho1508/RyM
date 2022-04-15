import React from "react";

const Button = ({ onClick = () => {}, children, disabled, small }) => {
  return (
    <div
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </div>
  );
};

export default Button;
