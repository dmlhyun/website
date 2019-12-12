// @flow
import React from "react";
import styled from "styled-components";
import { EXPERIENCE, DESCRIPTION } from "../fixtures/experience";
import { monthYearFormat } from "../../../common/helpers";
import { Box, Section, Grid, Span, Text } from "../../../common/components";

const renderExperience = () =>
  EXPERIENCE.map(({ key, company, job, duration }) => (
    <ListItem key={key}>
      <HeaderWrapper direction="column">
        <Text>
          {company} - {job}
        </Text>
        <Span>
          {monthYearFormat(duration.start).toLocaleLowerCase()}
          {" - "}
          {monthYearFormat(duration.end).toLocaleLowerCase() || "now"}
        </Span>
      </HeaderWrapper>
      <ul>{renderDescription(company)}</ul>
    </ListItem>
  ));

const renderDescription = company =>
  DESCRIPTION[company].map((pt, i) => (
    <li key={`${company}_${i}`}>
      <Span>{pt}</Span>
    </li>
  ));

export const Experience = () => {
  return (
    <Section>
      <Grid direction="column">
        <Text>---- experience ----</Text>
        <Box direction="column">
          <List>{renderExperience()}</List>
        </Box>
      </Grid>
    </Section>
  );
};

const ListItem = styled.li`
  margin-bottom: 30px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const HeaderWrapper = styled(Box)`
  margin-bottom: 15px;
`;
