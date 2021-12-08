import SideNav from "../components/SideNav";
import TopInfoBar from "../components/TopInfoBar";
import SalesOverview from "../components/SalesOverview";
import ExpensesOverview from "../components/ExpensesOverview";
import InventoryChart from "../components/InventoryChart";
import ProductDetails from "../components/ProductDetails";
import NumOfUsers from "../components/NumOfUsers";
import InventorySummary from "../components/InventorySummary";

function Dashboard() {
  return (
    <main className="dashboard">
      <div className="dashboard-content">
        <TopInfoBar />
        <SideNav />
        <ProductDetails />
        <NumOfUsers />
        <InventorySummary />
        <SalesOverview />
        <ExpensesOverview />
        <InventoryChart />
      </div>
    </main>
  );
}

export default Dashboard;
