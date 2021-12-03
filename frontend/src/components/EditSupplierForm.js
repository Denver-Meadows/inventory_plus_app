import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../components/context";
import Loading from "../pages/Loading";
import validateForm from "./validateCusSupForm";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  state: "",
};

const EditCustomerForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const { loading, setLoading } = useGlobalContext();
  const { id } = useParams();

  const getSingleItem = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/suppliers/?ID=${id}`);
        const [item] = await data.filter((item) => item._id === id);
        setFormData(item);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [setLoading]
  );

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
        .put(`http://localhost:3001/suppliers/update-supplier/${id}`, formData)
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            window.location.href = "/suppliers";
          }
        });

      // clear formData and errors
      setFormData(initialFormData);
      setErrors({});
    }
  };

  useEffect(() => {
    getSingleItem(id);
    return () => {
      // Cleanup
    };
  }, [id, getSingleItem]);

  if (loading) return <Loading />;
  return (
    <form className="add-new-form">
      <div className="add-new-form-control">
        <label htmlFor="name">Name : </label>
        <div className="input-error">
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
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
            value={formData.email}
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
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="form-error-text">{errors.phone}</p>}
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
            value={formData.city}
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
            value={formData.state}
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
          <button onClick={handleSubmit}>Update</button>
        </Link>
      </div>
    </form>
  );
};

export default EditCustomerForm;
