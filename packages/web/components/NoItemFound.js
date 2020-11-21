import React from 'react';
import styled from 'styled-components';
import noresult from 'core/static/images/no-result.svg';
const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
export default function NoItemFound() {
  return <StyledImage src={noresult} />;
}
