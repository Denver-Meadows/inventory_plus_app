import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import axios from "axios";
import { useGlobalContext } from "../components/context";

const Suppliers = () => {
  const { suppliers, loading, fetchSuppliers } = useGlobalContext();

  useEffect(() => {
    fetchSuppliers();
    return () => {
      // Cleanup
    };
  }, []);

  if (loading) return <h1>Loading</h1>;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>review suppliers</h1>
          {suppliers.map((supplier) => {
            const { name, phone, email, city, state, _id } = supplier;
            return (
              <p key={_id}>
                {`Name: ${name}
                Email: ${email}
                Phone: ${phone}
                City: ${city}
                State: ${state}`}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Suppliers;
