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

const CreateSupplierForm = () => {
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
      // submit to DB - make sure validations are working
      axios
        .post("http://localhost:3001/suppliers/create-supplier", formData)
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "/suppliers";
          }
        });
      // clear formData and actual fields
      setFormData(initialFormData);
      setErrors({});
    }
  };

  return (
    <form className="add-new-form" action="/suppliers">
      <div className="add-new-form-control">
        <label htmlFor="name">Name : </label>
        <div className="input-error">
          <input
            type="text"
            id="name"
            name="name"
            required
            // value={person.firstName}
            onChange={handleChange}
          />
          {errors.name && <p className="form-error-text">{errors.name}</p>}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="email">Email : </label>
        <div className="input-error">
          <input
            type="email"
            id="email"
            name="email"
            required
            // value={person.firstName}
            onChange={handleChange}
          />
          {errors.email && <p className="form-error-text">{errors.email}</p>}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="phone">Phone : </label>
        <div className="input-error">
          <input
            type="text"
            id="phone"
            name="phone"
            required
            // value={person.firstName}
            onChange={handleChange}
          />
          {errors.phone && <p className="form-error-text">{errors.name}</p>}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="city">City : </label>
        <div className="input-error">
          <input
            type="text"
            id="city"
            name="city"
            required
            // value={person.firstName}
            onChange={handleChange}
          />
          {errors.city && <p className="form-error-text">{errors.city}</p>}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="state">State : </label>
        <div className="input-error">
          <input
            type="text"
            id="state"
            name="state"
            required
            // value={person.firstName}
            onChange={handleChange}
          />
          {errors.state && <p className="form-error-text">{errors.state}</p>}
        </div>
      </div>
      <div className="add-new-btn-container">
        <Link to={"/suppliers"}>
          <button>Go Back</button>
        </Link>
        <Link to={"/suppliers"}>
          <button onClick={handleSubmit}>Add</button>
        </Link>
      </div>
    </form>
  );
};

export default CreateSupplierForm;
