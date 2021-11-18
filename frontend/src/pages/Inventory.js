import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import axios from "axios";
import { useGlobalContext } from "../components/context";
import { Link } from "react-router-dom";

const Inventory = () => {
  const { inventory, loading, fetchInventory, page } = useGlobalContext();
  // const [page, setPage] = useState(0);

  useEffect(() => {
    fetchInventory();
    return () => {
      // Cleanup
    };
  }, []);

  // useEffect(() => {
  //   if (loading) return;
  //   setPagedData(inventory[page]);
  //   console.log(pagedData);
  //   return () => {
  //     // Cleanup
  //   };
  // }, [pagedData]);

  if (loading) return <Loading />;

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
        </div>
      </div>
    </main>
  );
};

export default Inventory;
