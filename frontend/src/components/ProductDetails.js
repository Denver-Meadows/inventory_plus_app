import { FcComboChart, FcShipped } from "react-icons/fc";

function ProductDetails() {
  return (
    <article className="dashboard-content-product-details info-component">
      <h3>Product Details</h3>
      <div className="product-details">
        <div className="product-details-item">
          <p>Low Stock Items</p>
          <p>30</p>
        </div>
        <div className="product-details-item">
          <p>Item Group</p>
          <p>14</p>
        </div>
        <div className="product-details-item">
          <p>No. of Items</p>
          <p>104</p>
        </div>
      </div>
    </article>
  );
}

export default ProductDetails;
