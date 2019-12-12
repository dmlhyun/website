import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "./common/components";
import { background } from "./common/constants/colors";
import { Home } from "./components/home";
import { Projects } from "./components/projects";
import { Resume } from "./components/resume";
import { Secret } from "./components/secret";

const Background = styled.div`
  background: ${background};
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

const App = () => {
  return (
    <Background>
      <Container align="center" justify="center">
        <Router>
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
        </Router>
      </Container>
    </Background>
  );
};

export default App;
