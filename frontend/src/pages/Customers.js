import React, { useState, useEffect } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { prevPage, nextPage } from "../utils";

const Customers = () => {
  const { customers, loading } = useGlobalContext();
  const [page, setPage] = useState(0);

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
          {customers.length < 10 ? (
            ""
          ) : (
            <div className="hello">
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
