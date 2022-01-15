import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import validateForm from "../utilities.js/validateInventoryForm";

const initialFormData = {
  name: "",
  description: "",
  category: "",
  cost: "",
  sellPrice: "",
  qtyOnHand: "",
};

const EditInvItemForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const history = useHistory();

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
      axios.post(`/inventory/create-item/`, formData).then((res) => {
        history.push("/inventory");
      });

      // clear formData and actual fields
      setFormData(initialFormData);
      setErrors({});
    }
  };

  return (
    <form className="add-new-form">
      <div className="add-new-form-control">
        <label htmlFor="name">Name : </label>
        <div className="input-error">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
            onChange={handleChange}
          />
          {errors.name && <p className="form-error-text">{errors.name}</p>}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="description">Description : </label>
        <div className="input-error">
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            required
            onChange={handleChange}
          />
          {errors.description && (
            <p className="form-error-text">{errors.description}</p>
          )}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="category">Category : </label>
        <div className="input-error">
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Category"
            required
            onChange={handleChange}
          />
          {errors.category && (
            <p className="form-error-text">{errors.category}</p>
          )}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="qtyOnHand">Quantity on Hand : </label>
        <div className="input-error">
          <input
            type="number"
            id="qtyOnHand"
            name="qtyOnHand"
            placeholder="10"
            required
            onChange={handleChange}
          />
          {errors.qtyOnHand && (
            <p className="form-error-text">{errors.qtyOnHand}</p>
          )}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="cost">Cost : </label>
        <div className="input-error">
          <input
            type="number"
            id="cost"
            name="cost"
            placeholder="25"
            required
            onChange={handleChange}
          />
          {errors.cost && <p className="form-error-text">{errors.cost}</p>}
        </div>
      </div>
      <div className="add-new-form-control">
        <label htmlFor="sellPrice">Sell Price : </label>
        <div className="input-error">
          <input
            type="number"
            id="sellPrice"
            name="sellPrice"
            placeholder="50"
            required
            onChange={handleChange}
          />
          {errors.sellPrice && (
            <p className="form-error-text">{errors.sellPrice}</p>
          )}
        </div>
      </div>
      <div className="add-new-btn-container">
        <Link to={"/inventory"}>
          <button>Go Back</button>
        </Link>
        <Link to={"/inventory"}>
          <button onClick={handleSubmit}>Add</button>
        </Link>
      </div>
    </form>
  );
};

export default EditInvItemForm;
