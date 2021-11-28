import React from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import CreateInvItemForm from "../components/CreateInvItemForm";

const CreateInvItem = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Add New Item</h1>
          <div className="add-new">
            <CreateInvItemForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateInvItem;
