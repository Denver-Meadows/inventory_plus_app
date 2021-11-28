import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import EditCustomerForm from "../components/EditCustomerForm";

const SingleCustomerEdit = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Edit Customer</h1>
          <div className="add-new">
            <EditCustomerForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleCustomerEdit;
