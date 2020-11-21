import styled from 'styled-components';

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-top: 20px;

    .outlineButton {
      width: calc(50% - 5px);
    }
  }
`;

const InfoBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 30px;
  ${'' /* padding: 20px 35px; */};

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;

const AlignCenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const DescriptionBlock = styled.div`
  display: block;
  font-family: 'Lato';
  font-size: 15px;
  line-height: 22px;
  color: #595959;
`;

export { DescriptionBlock, AlignCenterWrapper, InfoBoxWrapper, ButtonWrapper };
