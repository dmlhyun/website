// @flow
import styled from "styled-components";
import { medium, large, xlarge } from "../constants/screens";

export const Grid = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || "row"};
  justify-content: space-evenly;
`;

const getWidth = val => {
  return (val / 12) * 100;
};

export const GridItem = styled.div`
  width: ${props => getWidth(props.sm)}%;
  @media only screen and (min-width: ${medium}) {
    width: ${props => getWidth(props.md)}%;
  }
  @media only screen and (min-width: ${large}) {
    width: ${props => getWidth(props.lg)}%;
  }
  @media only screen and (min-width: ${xlarge}) {
    width: ${props => getWidth(props.xl)}%;
  }
`;
