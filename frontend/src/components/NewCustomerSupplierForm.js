import React from "react";
import { Link } from "react-router-dom";

const NewCustomerSupplierForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("add");
  };
  return (
    <form className="add-new-form">
      <div className="add-new-form-control">
        <label htmlFor="name">Name : </label>
        <input
          type="text"
          id="name"
          name="name"
          // value={person.firstName}
          // onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          // value={person.firstName}
          // onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="phone">Phone : </label>
        <input
          type="text"
          id="phone"
          name="phone"
          // value={person.firstName}
          // onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="city">City : </label>
        <input
          type="text"
          id="city"
          name="city"
          // value={person.firstName}
          // onChange={handleChange}
        />
      </div>
      <div className="add-new-form-control">
        <label htmlFor="state">State : </label>
        <input
          type="text"
          id="state"
          name="state"
          // value={person.firstName}
          // onChange={handleChange}
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

export default NewCustomerSupplierForm;
