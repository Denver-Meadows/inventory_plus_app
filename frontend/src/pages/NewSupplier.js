import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";
import NewCustomerSupplierForm from "../components/NewCustomerSupplierForm";

const NewSupplier = () => {
  return (
    //name, email, phone, city, state
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Add New Supplier</h1>
          <div className="add-new">
            <NewCustomerSupplierForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NewSupplier;
