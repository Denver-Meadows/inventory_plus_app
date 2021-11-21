import React, { useState, useEffect } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { prevPage, nextPage } from "../utils";

const Inventory = () => {
  const { inventory, loading } = useGlobalContext();
  const [page, setPage] = useState(0);

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
                <Link to={`/inventory/${_id}`} state={{ page }}>
                  <button className="btnList">{name}</button>
                </Link>
              </div>
            );
          })}
          {inventory.length < 0 ? (
            ""
          ) : (
            <div className="page-buttons">
              <button
                onClick={() => prevPage(setPage, inventory)}
                className="page-button"
              >
                prev
              </button>
              <button
                onClick={() => nextPage(setPage, inventory)}
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

export default Inventory;
