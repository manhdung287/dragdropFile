
import '../src/assets/styles/index.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";



import Home from './modules/Pages/Home';
import DragItem from './modules/Pages/DragItem';
import { ROUTER } from './modules/ultils/router';

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
