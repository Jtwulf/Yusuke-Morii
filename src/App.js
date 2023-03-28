import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Biography from './components/Biography';
import Work from './components/Work';

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
