import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/Homepage";
import Quests from "./pages/Quests";
import Lore from "./pages/Lore";
import Navbar from "./components/nav/Nav";
import Attributes from "./pages/Attributes";
import SkillTree from "./pages/SkillTree";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/quests">
          <Quests />
        </Route>
        <Route path="/attributes">
          <Attributes />
        </Route>
        <Route path="/skill-tree">
          <SkillTree />
        </Route>
        <Route path="/life-lore">
          <Lore />
        </Route>
        <Route exact={true} path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
