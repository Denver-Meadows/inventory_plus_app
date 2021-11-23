import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";

const Purchasing = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>review purchasing</h1>
        </div>
      </div>
    </main>
  );
};

export default Purchasing;
