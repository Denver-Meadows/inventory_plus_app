import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import EditSupplierForm from "../components/EditSupplierForm";

const SingleSupplierEdit = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Edit Supplier</h1>
          <div className="add-new">
            <EditSupplierForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleSupplierEdit;
