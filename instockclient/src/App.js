import "./App.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from "./components/Nav/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
