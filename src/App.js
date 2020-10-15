import React from "react";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Resume } from "./components/resume";
import { Secret } from "./components/secret";
import { useKonamiCode } from "./services/konami";

const App = () => {
  const konamiCode = useKonamiCode()
  const history = useHistory()

  if (konamiCode) return (
    history.push('/secret')
  )
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
      <Route path="/resume">
        <Resume />
      </Route>
      <Route path="/secret">
        <Secret />
      </Route>
    </Switch>
  );
};

export default App;
