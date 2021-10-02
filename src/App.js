
import './App.css';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";


import { ROUTER } from './ultils/router';
import Home from './modules/Pages/Home';
import DragItem from './modules/Pages/DragItem';

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
