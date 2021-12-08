const validateForm = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "*Name required";
  }

  if (!values.email) {
    errors.email = "*Email required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "*Email address is invalid";
  }

  if (!values.phone) {
    errors.phone = "*Phone required";
  } else if (
    !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/i.test(values.phone)
  ) {
    errors.phone = "*Phone number is invalid";
  }

  if (!values.city) {
    errors.city = "*City required";
  }

  if (!values.state) {
    errors.state = "*State required";
  } else if (values.state.length !== 2) {
    errors.state = "*Please enter 2 letter state abbreviation";
  }

  return errors;
};

export default validateForm;
