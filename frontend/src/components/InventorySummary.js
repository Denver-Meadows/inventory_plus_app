import { BiArrowFromBottom } from "react-icons/bi";
import { FcComboChart, FcShipped } from "react-icons/fc";
import { useGlobalContext } from "./context";
import { useEffect } from "react";

function InventorySummary() {
  const { inventory, onOrder, fetchInventory } = useGlobalContext();

  const allItems = inventory.flat(1);

  const getTotalItems = (arr) => {
    if (arr.length === 0) return;
    const total = arr
      .map((item) => item.qtyOnHand)
      .reduce((prev, next) => next + prev);
    return total;
  };

  // useEffect(() => {
  //   fetchInventory();
  //   return () => {
  //     //cleanup
  //   };
  // }, []);

  return (
    <article className="dashboard-content-inventory-summary inventory-overview-article">
      <h3>Inventory Summary</h3>
      <div className="inventory-overview-article-content">
        <div className="inventory-overview-article-content-summary">
          <FcComboChart className="inventory-icon" />
          <p>Quantity on Hand</p>
          <h3>{`${getTotalItems(allItems)} items`}</h3>
        </div>
        <div className="inventory-overview-article-content-summary">
          <FcShipped className="inventory-icon" />
          <p>To be Received</p>
          <h3>{`${onOrder} items`}</h3>
        </div>
      </div>
    </article>
  );
}

export default InventorySummary;
