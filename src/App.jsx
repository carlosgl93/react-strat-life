import { Switch, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import Navbar from "./components/Nav";

function App() {
  return (
    <div>
      <Navbar>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Navbar>
    </div>
  );
}

export default App;
