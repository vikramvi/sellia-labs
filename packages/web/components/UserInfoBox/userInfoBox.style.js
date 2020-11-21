import styled from 'styled-components';
import Img from 'react-image';

const Image = styled(Img)`
  width: 100%;
  height: 100%;
  border-radius: 0;
  object-fit: cover;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: ${props => (props.imgWidth ? props.imgWidth : '100%')};
  height: ${props => (props.imgHeight ? props.imgHeight : '100%')};
  display: flex;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  border-radius: ${props => (props.imgRadius ? props.imgRadius : 19)}px;
`;

const Information = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  overflow: hidden;
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #333333;
  margin-bottom: 5px;
`;

const PostedTime = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #8c8c8c;
`;

const AddressInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const Address = styled.span`
  color: #8c8c8c;
  font-size: 14px;
  line-height: 17px;
`;

const OtherInfo = styled(AddressInfo)`
  margin-bottom: 5px;
`;

const PhoneNo = styled(Address)``;

const CallNowText = styled(Address)`
  color: #30c56d;
  font-weight: 700;
`;

const EditButton = styled.div`
  position: absolute;
  padding: 9px;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  bottom: 0;
  left: 0;
  color: #fff;
  font-size: 15px;
`;
const IconBox = styled.span`
  display: inline-block;
  color: #bababa;
  margin-right: 7px;
  margin-top: 3px;
`;
export {
  InfoBox,
  ImageWrapper,
  Information,
  Image,
  Title,
  PostedTime,
  AddressInfo,
  Address,
  OtherInfo,
  PhoneNo,
  CallNowText,
  EditButton,
  IconBox,
};
