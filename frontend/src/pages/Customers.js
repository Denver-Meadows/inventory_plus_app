import React, { useState, useEffect, useRef } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { prevPage, nextPage } from "../utilities.js/utils";

const Customers = () => {
  const { customers, loading, fetchCustomers } = useGlobalContext();
  const [page, setPage] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    if (isMountedRef.current) {
      fetchCustomers();
    }
    return () => {
      isMountedRef.current = false;
    };
  }, [fetchCustomers]);

  if (loading) return <Loading />;
  if (customers.length < 1) return <Dashboard />;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <div className="page-header">
            <h1>Customers</h1>
            <Link to={"customers/new"}>
              <button className="add-btn">Add Customer</button>
            </Link>
          </div>
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
          {customers.length === 1 ? (
            ""
          ) : (
            <div className="page-buttons">
              <button
                onClick={() => prevPage(setPage, customers)}
                className="page-button"
              >
                prev
              </button>
              <button
                onClick={() => nextPage(setPage, customers)}
                className="page-button"
              >
                next
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Customers;
