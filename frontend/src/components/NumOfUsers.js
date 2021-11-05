import { FcConferenceCall, FcOrganization } from "react-icons/fc";

function NumOfUsers() {
  return (
    <article className="dashboard-content-num-users inventory-overview-article">
      <h3>Number of Users</h3>
      <div className="inventory-overview-article-content">
        <div className="inventory-overview-article-content-summary">
          <FcConferenceCall className="inventory-icon" />
          <p>Total Customers</p>
          <h3>112</h3>
        </div>
        <div className="inventory-overview-article-content-summary">
          <FcOrganization className="inventory-icon" />
          <p>Total Suppliers</p>
          <h3>12</h3>
        </div>
      </div>
    </article>
  );
}

export default NumOfUsers;
