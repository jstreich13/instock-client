import "./App.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WarehouseList from "./components/WarehouseList/WarehouseList";
import EditInventoryItem from "./components/EditInventoryItem/EditInventoryItem";

function App() {
  return (
    <BrowserRouter>
    <EditInventoryItem />
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
