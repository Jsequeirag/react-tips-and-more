import React from "react";

const Button = ({ text, color }) => {
  return <button className={`rounded ${color} py-3 px-3`}>{text}</button>;
};

export default Button;
