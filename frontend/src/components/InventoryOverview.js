import InventorySummary from "./InventorySummary";
import NumOfUsers from "./NumOfUsers";
import ProductDetails from "./ProductDetails";

function InventoryOverview() {
  return (
    <main className="dashboard-content-inventory-overview">
      <div className="inventory-overview">
        <InventorySummary />
        <ProductDetails />
        <NumOfUsers />
      </div>
    </main>
  );
}

export default InventoryOverview;
