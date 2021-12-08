import { useGlobalContext } from "./context";
import { getNumOfCategories, getNumItemsLowStock } from "../utilities.js/utils";

function ProductDetails() {
  const { inventory } = useGlobalContext();
  const numOfItems = inventory.flat(1);

  return (
    <article className="dashboard-content-product-details info-component">
      <h3>Product Details</h3>
      <div className="product-details">
        <div className="product-details-item">
          <p>Number of Items</p>
          <p>{numOfItems.length}</p>
        </div>
        <div className="product-details-item">
          <p>Categories</p>
          <p>{getNumOfCategories(numOfItems)}</p>
        </div>
        <div className="product-details-item">
          <p>Items with Low Stock</p>
          <p>{getNumItemsLowStock(numOfItems)}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductDetails;
