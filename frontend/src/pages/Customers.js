import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import axios from "axios";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";

////// Style buttons.  Pass in SingleCustomer component below and pass in page prop.
/////// or find that id in the db and render data that way.

const Customers = () => {
  const { customers, loading, fetchCustomers } = useGlobalContext();
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > customers.length - 1) nextPage = 0;
      console.log(customers.length);
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) prevPage = customers.length - 1;
      return prevPage;
    });
  };

  if (loading) return <Loading />;
  if (customers.length < 1) return <Dashboard />;

  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Customers</h1>
          {customers[page].map((customer) => {
            const { name, _id } = customer;
            return (
              <div className="btnContainer" key={_id}>
                <Link to={`/customers/${_id}`}>
                  <button className="btnList">{name}</button>
                </Link>
              </div>
            );
          })}
          {customers.length < 0 ? (
            ""
          ) : (
            <div className="hello">
              <button onClick={prevPage}>prev</button>
              <button onClick={nextPage}>next</button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Customers;
