import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import axios from "axios";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    const { data } = await axios.get("/inventory");
    setInventory(data);
  };

  useEffect(() => {
    fetchInventory();
    return () => {
      // Clean up
    };
  }, []);

  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>review inventory</h1>
          {inventory.map((item) => {
            const {
              name,
              sellPrice,
              cost,
              description,
              category,
              qtyOnHand,
              _id,
            } = item;
            return (
              <p key={_id}>
                {`Name: ${name}
              Price: ${sellPrice}
              Cost: ${cost}
              Description: ${description}
              Category: ${category}
              Quantity Avaiable: ${qtyOnHand}`}
              </p>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Inventory;
