// @flow
import React from "react";
import styled from "styled-components";
import { Header } from "../header";
import {
  Box,
  Grid,
  GridItem,
  ExternalLink,
  RouteLink
} from "../../common/components";

const GITHUB = "https://github.com/dmlhyun";
const INSTAGRAM = "https://www.instagram.com/dmlhyun/";
const LINKEDIN = "https://www.linkedin.com/in/euihyun/";

const Container = styled(Box)`
  flex-direction: column;
`;

const StyledGridItem = styled(GridItem)`
  display: flex;
  justify-content: center;
`;

const ROUTE_ITEMS = [
  {
    to: "/projects",
    content: "projects"
  },
  {
    to: "/resume",
    content: "résumé"
  }
];

const LIST_ITEMS = [
  {
    href: GITHUB,
    content: "github"
  },
  {
    href: LINKEDIN,
    content: "linkedin"
  },
  {
    href: INSTAGRAM,
    content: "instagram"
  }
];

const renderRouteList = () => {
  return ROUTE_ITEMS.map(({ to, content }) => (
    <StyledGridItem key={content} sm={12} md={12} lg={12} xl={12}>
      <RouteLink to={to}>{content}</RouteLink>
    </StyledGridItem>
  ));
};

const renderLinkList = () => {
  return LIST_ITEMS.map(({ href, content }) => (
    <StyledGridItem key={content} sm={12} md={12} lg={12} xl={12}>
      <ExternalLink href={href} target="_blank">
        {content}
      </ExternalLink>
    </StyledGridItem>
  ));
};

export const Home = () => {
  return (
    <Container align="center" justify="center">
      <Header title="andrew" subtitle="software engineer" />
      <Grid direction="column">
        {renderRouteList()}
        {renderLinkList()}
      </Grid>
    </Container>
  );
};
