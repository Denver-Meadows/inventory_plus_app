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
  const { inventory, loading, fetchInventory } = useGlobalContext();
  const [page, setPage] = useState(0);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > inventory.length - 1) nextPage = 0;
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) prevPage = inventory.length - 1;
      return prevPage;
    });
  };

  // useEffect(() => {
  //   fetchInventory();
  //   return () => {
  //     //cleanup
  //   };
  // }, [page]);

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
          {inventory.length < 0 ? (
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

export default Inventory;
