const validate = (values) => {
  const errors = {};
  if (!values.forename) {
    errors.forename = "Required!";
  } else if (values.forename.length > 15) {
    errors.forename = "Must be 15 characters or less";
  }

  if (!values.surname) {
    errors.surname = "Required!";
  } else if (values.surname.length > 20) {
    errors.surname = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required!";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export default validate;
