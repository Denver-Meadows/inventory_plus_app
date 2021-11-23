import { useGlobalContext } from "./context";

function ProductDetails() {
  const { inventory } = useGlobalContext();

  const numOfItems = inventory.flat(1);

  const getNumOfCategories = (items) => {
    const cates = items.map((item) => {
      if (!item.category) return;
      if (item.category) return item.category;
    });
    return [...new Set(cates)].length;
  };

  const getNumItemsLowStock = (items) => {
    const lowItems = items.map((item) => {
      if (item.qtyOnHand < 3) return item.qtyOnHand;
    });
    return lowItems.length;
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
          <p>{getNumItemsLowStock(inventory)}</p>
        </div>
      </div>
    </article>
  );
}

export default ProductDetails;
