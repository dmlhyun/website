// @flow
import React from "react";
import styled from "styled-components";
import { Box, Grid, RouteLink } from "../../common/components";

const Container = styled(Box)`
  flex-direction: column;
`;

export const Secret = () => {
  return (
    <Container align="center" justify="center">
      <Grid direction="column">
        <RouteLink to="/">back</RouteLink>
        <span role="img" aria-label="hush emoji">
          🤫keep it a secret
        </span>
      </Grid>
    </Container>
  );
};
