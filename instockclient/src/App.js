import "./App.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WarehouseList from "./components/WarehouseList/WarehouseList";

function App() {
  return (
    <BrowserRouter>
    <WarehouseList />
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
