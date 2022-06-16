import "./App.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddInventoryItem from "./components/AddInventoryItem/AddInventoryItem";

function App() {
  return (
    <BrowserRouter>
    <AddInventoryItem />
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
