// @flow
import React from "react";
import { Skills } from "./components/skills";
import { Experience } from "./components/experience";
import { Container, Grid, RouteLink } from "../../common/components";

export const Resume = () => {
  return (
    <Container align="center" justify="center">
      <Grid direction="column">
        <RouteLink to="/">back</RouteLink>
        <Skills />
        <Experience />
      </Grid>
    </Container>
  );
};
