import React from "react";
import { TextField } from "@material-ui/core";

const Input = ({ value, handleChange, label }) => {
  return (
    <TextField
      id={`${label}-input`}
      className="input"
      label={label}
      name={label}
      type={label === "email" ? label : "text"}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Input;
