import React, { useState, useEffect, useRef } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";
import { prevPage, nextPage } from "../utilities.js/utils";
import Dashboard from "./Dashboard";

const Suppliers = () => {
  const { suppliers, loading, fetchSuppliers } = useGlobalContext();
  const [page, setPage] = useState(0);
  const isMountedRef = useRef(true);

  useEffect(() => {
    if (isMountedRef.current) fetchSuppliers();
    return () => {
      isMountedRef.current = false;
    };
  });

  if (loading) return <Loading />;
  if (suppliers.length < 1) return <Dashboard />;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <div className="page-header">
            <h1>Suppliers</h1>
            <Link to={"suppliers/new"}>
              <button className="add-btn">Add Supplier</button>
            </Link>
          </div>
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
          {suppliers.length === 1 ? (
            ""
          ) : (
            <div className="page-buttons">
              <button
                onClick={() => prevPage(setPage, suppliers)}
                className="page-button"
              >
                prev
              </button>
              <button
                onClick={() => nextPage(setPage, suppliers)}
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

export default Suppliers;
