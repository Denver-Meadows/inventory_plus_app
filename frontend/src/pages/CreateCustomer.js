import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";

const NewCustomer = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Add New Customer</h1>
          <div className="add-new">
            <div className="add-new-form">
              <h5>form goes here</h5>
            </div>
            <div className="add-new-btn-container">
              <Link to={"/customers"}>
                <button>Go Back</button>
              </Link>
              <button type="submit">Add</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewCustomer;