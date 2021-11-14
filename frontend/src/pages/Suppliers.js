import React, { useState, useEffect, Link } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import axios from "axios";
import { useGlobalContext } from "../components/context";

const Suppliers = () => {
  const { suppliers, loading, fetchSuppliers } = useGlobalContext();

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
            const { name, _id } = supplier;
            return (
              <div className="btnContainer">
                <button className="btnList" key={_id}>
                  {name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Suppliers;
