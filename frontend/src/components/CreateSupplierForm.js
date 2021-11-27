import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    // console.log(formData);
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
  };

  return (
    <form className="add-new-form" action="/suppliers">
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
        <Link to={"/suppliers"}>
          <button onClick={handleSubmit}>Add</button>
        </Link>
      </div>
    </form>
  );
};

export default CreateSupplierForm;
