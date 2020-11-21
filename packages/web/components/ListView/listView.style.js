import styled from 'styled-components';
import Img from 'react-image';
const ListViewWrapper = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eeeeee;
  transition: 0.3s;

  :hover {
    background-color: rgba(226, 226, 226, 0.15);
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  /* @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
  } */
`;

const ImageWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  display: inline-block;
  width: ${props => props.imgWidth || '210px'};
  height: ${props => props.imgHeight || '160px'};
  margin-top: ${props => props.imgMarginTop || props.imgMarginY || '0'};
  margin-bottom: ${props => props.imgMarginBottom || props.imgMarginY || '0'};
  margin-left: ${props => props.imgMarginLeft || props.imgMarginX || '0'};
  margin-right: ${props => props.imgMarginRight || props.imgMarginX || '0'};
  padding: ${props => props.padding || '0 15px'};
  border: ${props => props.borderSize || '0'}px solid
    ${props => props.borderColor || 'transparent'};

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
    min-height: 180px;
    margin-bottom: 20px;
  }

  /* @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
    height: auto;
    min-height: 180px;
    margin-bottom: 20px;
  } */
`;
const Image = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentWrap = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 15px;
`;

const AddressBox = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;

  /* @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 15px;
  } */

  @media screen and (max-width: 600px) {
    margin-bottom: 5px;
  }
`;

const TextGroup = styled('div')`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled('div')`
  display: inline-flex;
  justify-content: center;
`;

const AddressAndDate = styled('div')`
  width: 100%;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 30px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }

  /* @media screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
  } */
`;

export {
  AddressBox,
  ListViewWrapper,
  ImageWrapper,
  Image,
  ContentWrap,
  TextGroup,
  IconWrapper,
  AddressAndDate,
};
