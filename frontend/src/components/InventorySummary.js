import { FcComboChart, FcShipped } from "react-icons/fc";

function InventorySummary() {
  return (
    <article className="dashboard-content-inventory-summary inventory-overview-article">
      <h3>Inventory Summary</h3>
      <div className="inventory-overview-article-content">
        <div className="inventory-overview-article-content-summary">
          <FcComboChart className="inventory-icon" />
          <p>Quantity on Hand</p>
          <h3>245</h3>
        </div>
        <div className="inventory-overview-article-content-summary">
          <FcShipped className="inventory-icon" />
          <p>To be Received</p>
          <h3>30</h3>
        </div>
      </div>
    </article>
  );
}

export default InventorySummary;
