import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import styled from "styled-components";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { Container } from "./common/components";
import { background } from "./common/constants/colors";

const Background = styled.div`
  background: ${background};
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
`;

ReactDOM.render(
  <Background>
    <Container align="center" justify="center">
      <Router>
        <App />
      </Router>
    </Container>
  </Background>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
