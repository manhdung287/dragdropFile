
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from './modules/Home';
import DragItem from './modules/DragItem';
import { ROUTER } from './ultils/router';

function App() {

  return (
    <Router>
      <Switch>
        <Route path={ROUTER.home} exact>
          <Home/>
        </Route>
        <Route path={ROUTER.drag} exact>
          <DragItem/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
