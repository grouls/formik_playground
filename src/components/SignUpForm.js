import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import { Container, Grid, TextField } from "@material-ui/core";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { forename: "", surname: "", email: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const { handleSubmit, handleChange } = formik;
  const { forename, surname, email } = formik.values;
  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Forename"
              id="forename"
              name="forename"
              type="text"
              onChange={handleChange}
              value={forename}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Surname"
              id="surname"
              name="surname"
              type="text"
              onChange={handleChange}
              value={surname}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              onChange={handleChange}
              value={email}
            />
          </Grid>
        </Grid>
        <Button
          className="button"
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
