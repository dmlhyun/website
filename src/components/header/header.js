// @flow
import React from "react";
import styled from "styled-components";
import { Box } from "../../common/components";
import { greyscaleDarker, greyscaleDark } from "../../common/constants/colors";

const Title = styled.h1`
  color: ${greyscaleDarker};
  margin: 0 0 10px 0;
`;

const Subtitle = styled.h2`
  color: ${greyscaleDark};
  margin: 0 0 10px 0;
`;

const HeaderWrapper = styled(Box)`
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Header = ({ title, subtitle }) => {
  return (
    <HeaderWrapper>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HeaderWrapper>
  );
};
