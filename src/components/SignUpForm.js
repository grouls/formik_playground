import React from "react";
import { useFormik } from "formik";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  const { handleSubmit, handleChange, values } = formik;
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={handleChange}
        value={values.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignupForm;
