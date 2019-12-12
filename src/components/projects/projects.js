// @flow
import React from "react";
import styled from "styled-components";
import {
  Box,
  Grid,
  GridItem,
  RouteLink,
  ExternalLink
} from "../../common/components";

const BOBA = "https://www.buildwithboba.com/";

const PROJECTS = [
  {
    href: BOBA,
    content: "boba"
  }
];

const renderProjectLinks = () => {
  return PROJECTS.map(({ href, content }) => (
    <StyledGridItem key={content} sm={12} md={12} lg={12} xl={12}>
      <ExternalLink href={href} target="_blank">
        {content}
      </ExternalLink>
    </StyledGridItem>
  ));
};

export const Projects = () => {
  return (
    <Container align="center" justify="center">
      <Grid direction="column">
        <StyledBox>
          <RouteLink to="/">back</RouteLink>
        </StyledBox>
        {renderProjectLinks()}
      </Grid>
    </Container>
  );
};

const Container = styled(Box)`
  flex-direction: column;
`;

const StyledGridItem = styled(GridItem)`
  display: flex;
  justify-content: center;
`;

const StyledBox = styled(Box)`
  margin-bottom: 20px;
`;
