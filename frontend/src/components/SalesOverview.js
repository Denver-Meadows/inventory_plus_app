import {
  FcSalesPerformance,
  FcBullish,
  FcBearish,
  FcMoneyTransfer,
} from "react-icons/fc";

function SalesOverview() {
  return (
    <main className="dashboard-content-sales">
      <article className="sales-purchases-overview">
        <h4>Projected Sales Data</h4>
        <div className="sales-purchases-overview-items">
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcSalesPerformance />
            </div>{" "}
            <div className="sales-purchases-overview-item-stats">
              <p>Total Sales</p>
              <h3>$786</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBullish />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Gross Margin</p>
              <h3>22%</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBearish />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Total Cost</p>
              <h3>$5384</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcMoneyTransfer />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Profit</p>
              <h3>$500</h3>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default SalesOverview;
