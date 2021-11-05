import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Inventory from "./pages/Inventory";
import Purchasing from "./pages/Purchasing";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route path="/customers">
        <Customers />
      </Route>
      <Route path="/inventory">
        <Inventory />
      </Route>
      <Route path="/purchasing">
        <Purchasing />
      </Route>
      <Route path="/Suppliers">
        <Suppliers />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
