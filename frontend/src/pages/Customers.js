import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  const getCustomers = async () => {
    const res = await fetch("/customers/");
    // const data = await res.json();
    console.log(res);
    // setCustomers(data.customerList);
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>review customers</h1>
        </div>
      </div>
    </main>
  );
};

export default Customers;
