import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Quests from "./pages/Quests";
import Lore from "./pages/Lore";
import Attributes from "./pages/Attributes";
import SkillTree from "./pages/SkillTree";

function App() {
  return (
    <Router>
      <Layout>
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
      </Layout>
    </Router>
  );
}

export default App;
