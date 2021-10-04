
import '../src/assets/styles/index.scss';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from './modules/Pages/Home';
import DragItem from './modules/Pages/DragItem';
import { ROUTER } from './modules/ultils/router';
import DragFile from './modules/Pages/DragFile';
import BuilderPage from './modules/Pages/BuilderPage';

function App() {

  return (
    <Router>
      <Switch>
        <Route path={ROUTER.home} exact>
          <Home/>
        </Route>
        <Route path={ROUTER.dragItem} exact>
          <DragItem/>
        </Route>
        <Route path={ROUTER.dragFile} exact>
          <DragFile/>
        </Route>
        <Route path={ROUTER.buildPage} exact>
          <BuilderPage/>
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
