import { Switch, Route } from "react-router-dom";

import Homepage from './components/homepage'
import Nav from './components/nav'

function App() {
  return <div>
    <Nav>
      <Switch>
        <Route exact path='/'>
          <Homepage>
        </Route>
      </Switch>
    </Nav>
  </div>;
}

export default App;
