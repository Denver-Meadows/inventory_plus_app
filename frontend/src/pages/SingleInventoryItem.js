import React, { useState, useEffect } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { useParams, Link } from "react-router-dom";

///////// SINGLE INVENTORY ITEM ONLY WORKING BECAUSE I ADDED THE [0] to the filter.
//////////  I need to get the page across all components
const SingleInventoryItem = () => {
  const { inventory, loading, fetchInventory } = useGlobalContext();
  const { id } = useParams();
  const [item] = inventory[0].filter((item) => item._id === id);

  useEffect(() => {
    fetchInventory();
    return () => {
      // Cleanup
    };
  }, []);

  if (loading) return <Loading />;
  if (!item) return <h1>'Sorry no items!'</h1>;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>{item.name}</h1>
          <div className="single-result">
            <div className="single-result-info">
              <p>{`Description: ${item.description}`}</p>
              <p>{`Category: ${item.category}`}</p>
              <p>{`Quantity on Hand: ${item.qtyOnHand}`}</p>
              <p>{`Cost: $${item.cost}`}</p>
              <p>{`Sell Price: $${item.sellPrice}`}</p>
            </div>
            <div className="single-result-btn-container">
              <Link to={"/inventory"}>
                <button>Go Back</button>
              </Link>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleInventoryItem;
