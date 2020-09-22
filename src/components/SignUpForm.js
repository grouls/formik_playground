import React from "react";
import { useFormik } from "formik";
import { Container, Grid, Button } from "@material-ui/core";
import Input from "./Input";
import validate from "./validation";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { forename: "", surname: "", email: "" },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const { handleSubmit, handleChange, errors } = formik;
  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit}>
        <Grid className="signup" container>
          <Input
            value={formik.values.forename}
            handleChange={handleChange}
            label="forename"
            errors={errors.forename}
          />
          <Input
            value={formik.values.surname}
            handleChange={handleChange}
            label="surname"
            errors={errors.surname}
          />
          <Input
            value={formik.values.email}
            handleChange={handleChange}
            label="email"
            errors={errors.email}
          />
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
