import React from "react";
import { Grid } from "@material-ui/core";
import { TextField } from "@material-ui/core";

const Input = ({ value, handleChange, label, errors }) => {
  return (
    <>
      <Grid item xs={8}>
        <TextField
          id={`${label}-input`}
          className="input"
          label={label}
          name={label}
          type={label === "email" ? label : "text"}
          onChange={handleChange}
          value={value}
        />
      </Grid>
      <Grid item xs={2}>
        <p className="validationError">{errors}</p>
      </Grid>
    </>
  );
};

export default Input;
