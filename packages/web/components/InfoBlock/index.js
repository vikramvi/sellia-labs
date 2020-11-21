import React from 'react';
import styled from 'styled-components';

const InfoBlockWrapper = styled('div')`
  text-align: ${props => props.textAlign || 'left'};
`;
const Heading = styled('h2')`
  font-size: 40px;
  color: #333333;
  font-family: 'Poppins';
  font-weight: 600;
`;
const Paragraph = styled('p')`
  line-height: ${props => props.lineHeight || 1.5};
  color: #595959;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
`;

const InfoBlock = ({
  className,
  textAlign,
  lineHeight,
  title,
  description,
  style,
}) => (
  <InfoBlockWrapper
    className={className}
    textAlign={textAlign}
    lineHeight={lineHeight}
    style={style}
  >
    <Heading>{title}</Heading>
    <Paragraph dangerouslySetInnerHTML={{ __html: description }} />
  </InfoBlockWrapper>
);

export default InfoBlock;
