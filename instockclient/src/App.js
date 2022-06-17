import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InventoryTable from "./components/InventoryTable/InventoryTable";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
// import Footer from "./components/Footer/footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <InventoryTable />
      <Switch>
              {/* <Route
                path="/"
                exact
                render={(routerProps) => <WarehousesPage {...routerProps} />}
              /> */}
              <Route
                path="/warehouses"
                exact
                render={(routerProps) => <WarehouseList {...routerProps} />}
              />
              {/* <Route
                exact
                path="/warehouses/add"
                render={(routerProps) => <AddWarehouse {...routerProps} />}
              /> */}
              {/* <Route
                exact
                path="/warehouses/:id"
                render={(routerProps) => <WarehouseDetails {...routerProps} />}
              /> */}
              {/* <Route
                path="/warehouses/:id/edit"
                render={(routerProps) => <EditWarehouse {...routerProps} />}
              /> */}
              {/* <Route
                path="/inventory"
                exact
                render={(routerProps) => <InventoryPage {...routerProps} />}
              /> */}
              <Route
                path="/inventory/add"
                exact
                render={(routerProps) => <AddInventoryItem {...routerProps} />}
              />
              {/* <Route
                path="/inventory/:id"
                exact
                render={(routerProps) => <InventoryItemDetails {...routerProps} />}
              /> */}
              {/* <Route
                path="/inventory/:id/edit"
                render={(routerProps) => <EditInventory {...routerProps} />}
              /> */}
      </Switch>

      {/* <Footer/> */}

    </BrowserRouter>
  );
}

export default App;
