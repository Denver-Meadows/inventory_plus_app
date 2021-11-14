import { FcComboChart, FcShipped } from "react-icons/fc";

function ProductDetails() {
  return (
    <article className="dashboard-content-product-details info-component">
      <h3>Product Details</h3>
      <div className="product-details">
        <div className="product-details-item">
          <p>Number of Items</p>
          <p>15</p>
        </div>
        <div className="product-details-item">
          <p>Categories</p>
          <p>4</p>
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
