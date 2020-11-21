import styled from 'styled-components';

const ImageHolder = styled.div`
  display: flex;
  flex-shrink: 0;
  width: ${props => (props.imgWidth ? props.imgWidth : '100%')};
  height: ${props => (props.imgHeight ? props.imgHeight : '100%')};
`;

const Images = styled.img`
  width: 100%;
  height: 100%;
`;

export { Images, ImageHolder };
