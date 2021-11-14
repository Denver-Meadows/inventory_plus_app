import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import axios from "axios";
import { useGlobalContext } from "../components/context";

////////////////   NEED TO MAKE A COMPONENT WITH THE RETURN CUSTOMER DATA

const Customers = () => {
  const { customers, loading, fetchCustomers } = useGlobalContext();

  useEffect(() => {
    fetchCustomers();
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
          <h1>review customers</h1>
          {customers.map((customer) => {
            const { name, email, phone, city, state, _id } = customer;
            return (
              <p key={_id}>
                {`
              Name:  ${name} 
              Email: ${email}
              Phone: ${phone}
              City: ${city}
              State: ${state}
              `}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Customers;
