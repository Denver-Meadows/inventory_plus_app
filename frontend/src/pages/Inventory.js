import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import axios from "axios";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";

const Inventory = () => {
  const {
    inventory,
    loading,
    fetchInventory,
    page,
    setPage,
    nextPage,
    prevPage,
  } = useGlobalContext();

  useEffect(() => {
    fetchInventory();
    return () => {
      //cleanup
    };
  }, [page]);

  if (loading) return <Loading />;

  if (inventory.length < 1) return <Dashboard />;

  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Inventory</h1>
          {inventory[page].map((item) => {
            const { name, _id } = item;
            return (
              <div className="btnContainer" key={_id}>
                <Link to={`/inventory/${_id}`}>
                  <button className="btnList">{name}</button>
                </Link>
              </div>
            );
          })}
          <div className="hello">
            <button onClick={prevPage}>prev</button>
            <button onClick={nextPage}>next</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Inventory;
