import { FcComboChart, FcShipped } from "react-icons/fc";
import { useGlobalContext } from "../context/context";
import { getTotalItems } from "../utilities.js/utils";

function InventorySummary() {
  const { inventory, onOrder } = useGlobalContext();
  const allItems = inventory.flat(1);

  return (
    <article className="dashboard-content-inventory-summary inventory-overview-article">
      <h3>Inventory Summary</h3>
      <div className="inventory-overview-article-content">
        <div className="inventory-overview-article-content-summary">
          <FcComboChart className="inventory-icon" />
          <p>Pieces on Hand</p>
          <h3>{`${getTotalItems(allItems)} each`}</h3>
        </div>
        <div className="inventory-overview-article-content-summary">
          <FcShipped className="inventory-icon" />
          <p>To be Received</p>
          <h3>{`${onOrder.current} each`}</h3>
        </div>
      </div>
    </article>
  );
}

export default InventorySummary;
