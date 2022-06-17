import "./App.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";
import WarehouseInventoryList from "./components/WarehouseInventoryList/WarehouseInventoryList";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <WarehouseInventoryList/>
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
