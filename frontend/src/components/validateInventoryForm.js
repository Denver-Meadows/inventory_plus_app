const validateForm = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "*Name required";
  }

  if (!values.description) {
    errors.description = "*Description required";
  }

  if (!values.category) {
    errors.category = "*Category required";
  }

  if (!values.qtyOnHand) {
    errors.qtyOnHand = "*Quantity on hand required";
  } else if (!values.qtyOnHand === isNaN()) {
    errors.qtyOnHand = "*Quantity must be a number";
  } else if (values.qtyOnHand <= 0) {
    errors.qtyOnHand = "*Number must be more than 1";
  }

  if (!values.cost) {
    errors.cost = "*Cost required";
  } else if (!values.cost === isNaN()) {
    errors.cost = "*Cost must be a number";
  } else if (values.cost <= 0) {
    errors.cost = "*Number must be more than 1";
  }

  if (!values.sellPrice) {
    errors.sellPrice = "*Sell price required";
  } else if (!values.sellPrice === isNaN()) {
    errors.sellPrice = "*Sell price must be a number";
  } else if (values.sellPrice <= 0) {
    errors.sellPrice = "*Number must be more than 1";
  }

  return errors;
};

export default validateForm;
