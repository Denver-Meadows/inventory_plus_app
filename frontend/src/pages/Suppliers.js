import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import axios from "axios";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";

const Suppliers = () => {
  const { suppliers, loading, fetchSuppliers } = useGlobalContext();
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > suppliers.length - 1) nextPage = 0;
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) prevPage = suppliers.length - 1;
      return prevPage;
    });
  };

  if (loading) return <Loading />;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Suppliers</h1>
          {suppliers[page].map((supplier) => {
            const { name, _id } = supplier;
            return (
              <div className="btnContainer" key={_id}>
                <Link to={`/suppliers/${_id}`}>
                  <button className="btnList">{name}</button>
                </Link>
              </div>
            );
          })}
          {suppliers.length < 10 ? (
            ""
          ) : (
            <div className="page-buttons">
              <button onClick={prevPage} className="page-button">
                prev
              </button>
              <button onClick={nextPage} className="page-button">
                next
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Suppliers;
