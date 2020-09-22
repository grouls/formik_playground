import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Button } from "@material-ui/core";
import Input from "./Input";

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
            <Input
              value={forename}
              handleChange={handleChange}
              label="forename"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              value={surname}
              handleChange={handleChange}
              label="surname"
            />
          </Grid>
          <Grid item xs={12}>
            <Input value={email} handleChange={handleChange} label="email" />
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
