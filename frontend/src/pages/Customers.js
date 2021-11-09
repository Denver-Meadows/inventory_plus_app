import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  // By setting the proxy in package.json to localhost:3001, the /customers routes are now the same (in theory)
  const getCustomers = async () => {
    const res = await fetch("/customers");
    const data = await res.json();
    // setCustomers(data.customerList);
    setCustomers(data);
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
          {customers.map((customer, index) => {
            const { name, age } = customer;
            return (
              <p key={index}>
                Name: {name} Age: {age}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Customers;
