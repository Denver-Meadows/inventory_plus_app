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

  const handleClick = (id) => {
    // e.preventDefault();
    console.log(id);
  };

  useEffect(() => {
    fetchSuppliers();
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
          <h1>Suppliers</h1>
          {suppliers.map((supplier) => {
            const { name, _id, email, phone } = supplier;
            return (
              <div className="btnContainer" key={_id}>
                <Link to={`/suppliers/${_id}`}>
                  <button className="btnList">{name}</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Suppliers;
