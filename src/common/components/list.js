// @flow
import styled from "styled-components";

export const UList = styled.ul`
  list-style: ${props => props.listStyle || "initial"};
  margin: 0 20px 0 0;
  padding: 0 20px;
`;
