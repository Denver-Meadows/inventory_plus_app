import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validateForm from "./validateCusSupForm";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
};

const CreateCustomerForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(formData));

    const currentErrors = validateForm(formData);

    if (Object.keys(currentErrors).length === 0) {
      // submit to DB after validations
      axios
        .post("http://localhost:3001/customers/create-customer", formData)
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "/customers";
          }
        });
      // clear formData and errors
      setFormData(initialFormData);
      setErrors({});
    }
  };

  return (
    <form className="add-new-form" action="/suppliers">
      <div className="add-new-form-control">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="form-error-text">{errors.name}</p>}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter email address"
          required
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="form-error-text">{errors.email}</p>}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="phone">Phone : </label>
        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          required
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="form-error-text">{errors.phone}</p>}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="city">City : </label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Enter city"
          required
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="form-error-text">{errors.city}</p>}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="state">State : </label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="Enter state"
          required
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <p className="form-error-text">{errors.state}</p>}
      </div>
      <div className="add-new-btn-container">
        <Link to={"/customers"}>
          <button>Go Back</button>
        </Link>
        <Link to={"/customers"}>
          <button onClick={handleSubmit}>Add</button>
        </Link>
      </div>
    </form>
  );
};

export default CreateCustomerForm;
