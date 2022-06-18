import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InventoryTable from "./components/InventoryTable/InventoryTable";
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";
<<<<<<< HEAD
import InventoryItemDetails from "./components/DisplayingItem/DisplayingItem";
// import Footer from "./components/Footer/footer"
=======
import Footer from "./components/Footer/footer";
>>>>>>> e1703d14e40cec0e164f437689089e742d8f612b

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
<<<<<<< HEAD
        {/* <Route
                path="/"
                exact
                render={(routerProps) => <WarehousesPage {...routerProps} />}
              /> */}
=======
        <Route
          path="/"
          exact
          render={(routerProps) => <WarehouseList {...routerProps} />}
        />
>>>>>>> e1703d14e40cec0e164f437689089e742d8f612b
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
        <Route
<<<<<<< HEAD
          path="/inventories"
=======
          path="/inventory"
>>>>>>> e1703d14e40cec0e164f437689089e742d8f612b
          exact
          render={(routerProps) => <InventoryTable {...routerProps} />}
        />
        <Route
<<<<<<< HEAD
          path="/inventories/add"
          exact
          render={(routerProps) => <AddInventoryItem {...routerProps} />}
        />
        <Route
          path="/inventories/:id"
          render={(routerProps) => <InventoryItemDetails {...routerProps} />}
        />
        {/* <Route
                path="/inventories/:id/edit"
                render={(routerProps) => <EditInventory {...routerProps} />}
              /> */}
      </Switch>

      {/* <Footer/> */}
=======
          path="/inventory/add"
          exact
          render={(routerProps) => <AddInventoryItem {...routerProps} />}
        />
        {/* <Route
                path="/inventory/:id"
                exact
                render={(routerProps) => <InventoryItemDetails {...routerProps} />}
              /> */}
        <Route
          path="/inventory/:id/edit"
          render={(routerProps) => <EditInventoryItem {...routerProps} />}
        />
      </Switch>

      <Footer />
>>>>>>> e1703d14e40cec0e164f437689089e742d8f612b
    </BrowserRouter>
  );
}

export default App;
