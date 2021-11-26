import { useGlobalContext } from "./context";
import { formatter, getNumOfCategories } from "../utils";
import { FcBarChart, FcCancel, FcLeft } from "react-icons/fc";

function ExpensesOverview() {
  const { inventory } = useGlobalContext();
  const allItems = inventory.flat(1);
  const categories = getNumOfCategories(allItems);

  const getAvgCost = (arr) => {
    if (arr.length === 0) return;
    const total = arr
      .map((item) => item.cost)
      .reduce((prev, next) => next + prev);
    return total;
  };

  const costPerItem = () => {
    if (allItems.length === 0) return;
    return getAvgCost(allItems) / allItems.length;
  };

  const costPerCat = () => {
    if (allItems.length === 0) return;
    return getAvgCost(allItems) / categories;
  };

  return (
    <main className="dashboard-content-purchases">
      <article className="sales-purchases-overview">
        <h4>Expenses / Average Costs</h4>
        <div className="sales-purchases-overview-items">
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBarChart />
            </div>{" "}
            <div className="sales-purchases-overview-item-stats">
              <p>Cost per Item</p>
              <h3>{formatter.format(costPerItem())}</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcCancel />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Cancellations</p>
              <h3>8</h3>
            </div>
          </div>
          <div className="sales-purchases-overview-items-item">
            <div className="sales-purchases-overview-item-icon">
              <FcBarChart />
            </div>
            <div className="sales-purchases-overview-item-stats">
              <p>Cost per Category</p>
              <h3>{formatter.format(costPerCat())}</h3>
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

export default ExpensesOverview;
