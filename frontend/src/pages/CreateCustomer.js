import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import CreateCustomerForm from "../components/CreateCustomerForm";

const CreateCustomer = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Add New Customer</h1>
          <div className="add-new">
            <CreateCustomerForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateCustomer;
