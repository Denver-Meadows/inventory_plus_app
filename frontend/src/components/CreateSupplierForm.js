import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
};

const CreateSupplierForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // submit to DB - make sure validations are working
    // clear formData and actual fields
  };

  return (
    <form className="add-new-form">
      <div className="add-new-form-control">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          // value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          // value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="phone">Phone : </label>
        <input
          type="text"
          id="phone"
          name="phone"
          required
          // value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="city">City : </label>
        <input
          type="text"
          id="city"
          name="city"
          required
          // value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="state">State : </label>
        <input
          type="text"
          id="state"
          name="state"
          required
          // value={person.firstName}
          onChange={handleChange}
        />
      </div>
      <div className="add-new-btn-container">
        <Link to={"/suppliers"}>
          <button>Go Back</button>
        </Link>
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </div>
    </form>
  );
};

export default CreateSupplierForm;
