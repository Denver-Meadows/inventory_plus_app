import React, { useState, useEffect } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SingleCustomer = () => {
  const { customers, loading, fetchCustomers } = useGlobalContext();
  const { id } = useParams();
  const [customer, setCustomer] = useState({});

  const getSingleCustomer = async (id) => {
    try {
      const { data } = await axios.get(`/customers?ID=${id}`);
      const [customer] = data.filter((customer) => customer._id === id);
      setCustomer(customer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleCustomer(id);
    return () => {
      // Cleanup
    };
  }, []);

  if (loading) return <Loading />;
  if (!customer) return <h1>''</h1>;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>{customer.name}</h1>
          <div className="single-result">
            <div className="single-result-info">
              <p>{`Phone: ${customer.phone}`}</p>
              <p>{`Email: ${customer.email}`}</p>
              <p>{`Location: ${customer.city}, ${customer.state}`}</p>
            </div>
            <div className="single-result-btn-container">
              <Link to={"/suppliers"}>
                <button>Go Back</button>
              </Link>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleCustomer;
