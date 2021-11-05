import React from "react";
import { Link } from "react-router-dom";

const DashboardLink = () => {
  return (
    <div className="dashboard-link">
      <Link to="/">Back to Dashboard</Link>
    </div>
  );
};

export default DashboardLink;
