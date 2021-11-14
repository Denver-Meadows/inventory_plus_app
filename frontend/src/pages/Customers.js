import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
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

  if (loading) return <Loading />;

  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Customers</h1>
          {customers.map((customer) => {
            const { name, _id } = customer;
            return (
              <div className="btnContainer" key={_id}>
                <button className="btnList">{name}</button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Customers;
