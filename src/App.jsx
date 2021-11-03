import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Quests from "./pages/Quests";
import Lore from "./pages/Lore";
import Attributes from "./pages/Attributes";
import SkillTree from "./pages/SkillTree";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useFirebaseApp } from "reactfire";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  const firebase = useFirebaseApp();

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/sign-up">
            <SignUp firebaseApp={firebase} />
          </Route>
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
          <Route path="/skills">
            <SkillTree />
          </Route>
          <Route path="/send-reset-password-email">
            <ForgotPassword />
          </Route>
          <Route path="/reset-password">
            <ResetPassword />
          </Route>
          <Route exact={true} path="/">
            <Homepage />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
