// @flow
import styled from "styled-components";
import { black } from "../constants/colors";

export const Span = styled.span`
  color: ${props => props.color || black};
  font-size: ${props => props.fontSize || "14px"};
`;

export const Text = styled.text`
  color: ${props => props.color || black};
  font-size: ${props => props.fontSize || "18px"};
  margin-bottom: 10px;
`;
