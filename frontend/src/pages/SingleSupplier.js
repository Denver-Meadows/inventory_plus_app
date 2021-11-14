import React, { useState, useEffect } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { useParams, Link } from "react-router-dom";

const SingleSupplier = () => {
  const { suppliers, loading, fetchSuppliers } = useGlobalContext();
  const { id } = useParams();
  const [supplier] = suppliers.filter((item) => item._id === id);

  // useEffect(() => {
  //   fetchSuppliers();
  //   return () => {
  //     // Cleanup
  //   };
  // }, []);

  if (loading) return <Loading />;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Single Supplier</h1>
          <div className="single-supplier">
            <div className="single-supplier-info">
              <h3>{supplier.name}</h3>
              <p>{supplier.phone}</p>
              <p>{supplier.email}</p>
              <p>{`${supplier.city}, ${supplier.state}`}</p>
            </div>
            <div className="btn-container">
              <Link to={"/suppliers"}>
                <button>All Suppliers</button>
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

export default SingleSupplier;
