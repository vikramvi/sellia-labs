import styled from 'styled-components';

const ReportModalWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #ffffff;
`;
const IconWrapper = styled('span')`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff7946;
  color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 3px;
  margin-top: 10px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 30px;
`;

export { ReportModalWrapper, ButtonWrapper, IconWrapper };
