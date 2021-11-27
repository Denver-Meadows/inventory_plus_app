import { Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Inventory from "./pages/Inventory";
import Purchasing from "./pages/Purchasing";
import SingleSupplier from "./pages/SingleSupplier";
import SingleCustomer from "./pages/SingleCustomer";
import SingleInventoryItem from "./pages/SingleInventoryItem";
import CreateCustomer from "./pages/CreateCustomer";
import CreateSupplier from "./pages/CreateSupplier";
import SingleCustomerEdit from "./pages/SingleCustomerEdit";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Dashboard />
      </Route>
      <Route exact path="/customers">
        <Customers />
      </Route>
      <Route exact path="/inventory">
        <Inventory />
      </Route>
      <Route exact path="/purchasing">
        <Purchasing />
      </Route>
      <Route exact path="/suppliers">
        <Suppliers />
      </Route>
      <Route exact path="/customers/new">
        <CreateCustomer />
      </Route>
      <Route exact path="/suppliers/new">
        <CreateSupplier />
      </Route>
      <Route exact path="/suppliers/:id">
        <SingleSupplier />
      </Route>
      <Route exact path="/customers/:id">
        <SingleCustomer />
      </Route>
      <Route exact path="/customers/:id/edit">
        <SingleCustomerEdit />
      </Route>
      <Route exact path="/inventory/:id">
        <SingleInventoryItem />
      </Route>
      <Route path="*">
        <ErrorPage />
      </Route>
    </Switch>
  );
}

export default App;
