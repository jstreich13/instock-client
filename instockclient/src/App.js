import "./App.scss";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/' exact component={}/> FOR WAREHOUSE */}
        {/* <Route path='/inventory' exact component={}/> FOR INVENTORY */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
