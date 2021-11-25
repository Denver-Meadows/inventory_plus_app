import { useGlobalContext } from "./context";
import {
  FcSalesPerformance,
  FcBullish,
  FcBearish,
  FcMoneyTransfer,
} from "react-icons/fc";

function SalesOverview() {
  const { inventory } = useGlobalContext();

  const allItems = inventory.flat(1);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  const getTotalSales = (arr) => {
    if (arr.length === 0) return;
    const total = arr
      .map((item) => item.qtyOnHand * item.sellPrice)
      .reduce((prev, next) => next + prev);
    return total;
  };

  const getTotalCost = (arr) => {
    if (arr.length === 0) return;
    const total = arr
      .map((item) => item.qtyOnHand * item.cost)
      .reduce((prev, next) => next + prev);
    return total;
  };

  // formatter.format(total)

  const getProfit = () => {
    return getTotalSales(allItems) - getTotalCost(allItems);
  };

  const getGrossMargin = () => {
    const gm = getProfit() / getTotalSales(allItems);
    return gm.toFixed(2) * 100;
  };

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
              <h3>{formatter.format(getTotalSales(allItems))}</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBullish />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Gross Margin</p>
              <h3>{`${getGrossMargin()}%`}</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBearish />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Total Cost</p>
              <h3>{formatter.format(getTotalCost(allItems))}</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcMoneyTransfer />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Profit</p>
              <h3>{formatter.format(getProfit())}</h3>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default SalesOverview;
