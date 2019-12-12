// @flow
import React from "react";
import { Box, Section, Grid, Text, Span } from "../../../common/components";
import { SKILLS } from "../fixtures/skills";

const renderTools = () =>
  SKILLS.tools.map(({ key, value }) => (
    <li key={key}>
      <Span>{value}</Span>
    </li>
  ));

const renderLangs = () =>
  SKILLS.languages.map(({ key, value }) => (
    <li key={key}>
      <Span>{value}</Span>
    </li>
  ));

export const Skills = () => {
  return (
    <Section>
      <Grid direction="column">
        <Text>---- skills ----</Text>
        <Box>
          <Box direction="column">
            <Text>tools</Text>
            <ul>{renderTools()}</ul>
          </Box>
          <Box direction="column">
            <Text>languages</Text>
            <ul>{renderLangs()}</ul>
          </Box>
        </Box>
      </Grid>
    </Section>
  );
};
