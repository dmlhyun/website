// @flow
import styled from "styled-components";

export const Box = styled.div`
  align-items: ${props => props.align || "flex-start"};
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: ${props => props.justify || "flex-start"};
`;

export const Container = styled(Box)`
  padding: 5% 10%;
  width: 100%;
`;

export const Section = styled(Box)`
  padding: 0 10%;
  margin-bottom: 30px;
`;
