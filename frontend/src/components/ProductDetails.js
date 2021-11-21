import { FcComboChart, FcShipped } from "react-icons/fc";
import { useGlobalContext } from "./context";

function ProductDetails() {
  const { inventory } = useGlobalContext();

  const numOfItems = inventory.flat(1);
  console.log(numOfItems);

  const getNumOfCategories = (items) => {
    const cates = items.map((item) => {
      if (!item.category) return;
      if (item.category) return item.category;
    });
    return [...new Set(cates)].length;
  };

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
          <p>2</p>
        </div>
      </div>
    </article>
  );
}

export default ProductDetails;
