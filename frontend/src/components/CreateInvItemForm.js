import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validateForm from "./validateInventoryForm";

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
      axios
        .post(`http://localhost:3001/inventory/create-item/`, formData)
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "/inventory";
          }
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
        <input
          type="text"
          id="name"
          name="name"
          required
          // value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="form-error-text">{errors.name}</p>}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="description">Description : </label>
        <input
          type="text"
          id="description"
          name="description"
          required
          // value={formData.description}
          onChange={handleChange}
        />
        {errors.description && (
          <p className="form-error-text">{errors.description}</p>
        )}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="category">Category : </label>
        <input
          type="text"
          id="category"
          name="category"
          required
          // value={formData.category}
          onChange={handleChange}
        />
        {errors.category && (
          <p className="form-error-text">{errors.category}</p>
        )}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="qtyOnHand">Quantity on Hand : </label>
        <input
          type="number"
          id="qtyOnHand"
          name="qtyOnHand"
          required
          // value={formData.qtyOnHand}
          onChange={handleChange}
        />
        {errors.qtyOnHand && (
          <p className="form-error-text">{errors.qtyOnHand}</p>
        )}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="cost">Cost : </label>
        <input
          type="number"
          id="cost"
          name="cost"
          required
          // value={formData.cost}
          onChange={handleChange}
        />
        {errors.cost && <p className="form-error-text">{errors.cost}</p>}
      </div>
      <div className="add-new-form-control">
        <label htmlFor="sellPrice">Sell Price : </label>
        <input
          type="number"
          id="sellPrice"
          name="sellPrice"
          required
          // value={formData.sellPrice}
          onChange={handleChange}
        />
        {errors.sellPrice && (
          <p className="form-error-text">{errors.sellPrice}</p>
        )}
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
