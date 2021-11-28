import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import EditInvItemForm from "../components/EditInvItemForm";

const SingleInvItemEdit = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Edit Customer</h1>
          <div className="add-new">
            <EditInvItemForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleInvItemEdit;
