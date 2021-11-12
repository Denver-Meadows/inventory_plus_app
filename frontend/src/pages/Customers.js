import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import axios from "axios";

////////////////   NEED TO MAKE A COMPONENT WITH THE RETURN CUSTOMER DATA

const Customers = () => {
  const [customers, setCustomers] = useState([]);

  // By setting the proxy in package.json to localhost:3001, the /customers routes are now the same (in theory)
  // Commented out the way to get this data prior to using axios.
  const getCustomers = async () => {
    const { data } = await axios.get("/customers");
    // const data = await res.json();
    // setCustomers(data.customerList);
    // console.log(data);
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
