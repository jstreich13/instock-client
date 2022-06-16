import "./App.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header/Header";
import WarehouseList from "./components/WarehouseList/WarehouseList";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
