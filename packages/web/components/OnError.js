import React from 'react';
import styled from 'styled-components';
import opps from 'core/static/images/oops.svg';
const StyledImage = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;
export default function NoItemFound() {
  return <StyledImage src={opps} />;
}
