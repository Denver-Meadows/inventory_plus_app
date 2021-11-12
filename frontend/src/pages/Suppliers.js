import React, { useState, useEffect } from "react";
import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import axios from "axios";

const Suppliers = () => {
  const [suppliers, setSuppliers] = useState([]);

  const fetchSuppliers = async () => {
    const { data } = await axios.get("/suppliers");
    setSuppliers(data);
  };

  useEffect(() => {
    fetchSuppliers();
    return () => {
      // Cleanup
    };
  }, []);

  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>review suppliers</h1>
        </div>
      </div>
    </main>
  );
};

export default Suppliers;
