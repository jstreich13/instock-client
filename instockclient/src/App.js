import "./App.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import InventoryTable from "./components/InventoryTable/InventoryTable";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <InventoryTable />
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
