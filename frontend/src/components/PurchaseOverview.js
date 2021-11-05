import { FcBarChart, FcCancel, FcBearish, FcLeft } from "react-icons/fc";

function PurchaseOverview() {
  return (
    <main className="dashboard-content-purchases">
      <article className="sales-purchases-overview">
        <h4>Expenses</h4>
        <div className="sales-purchases-overview-items">
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBarChart />
            </div>{" "}
            <div className="sales-purchases-overview-item-stats">
              <p>Total Purchases</p>
              <h3>86</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcCancel />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Cancellations</p>
              <h3>41</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBearish />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Cost</p>
              <h3>$5384</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcLeft />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Returns</p>
              <h3>12</h3>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default PurchaseOverview;
