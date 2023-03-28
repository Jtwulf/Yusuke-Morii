import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import Biography from './Biography';
import Work from './Work';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Biography">
          <Biography />
        </Route>
        <Route path="/Work">
          <Work />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
