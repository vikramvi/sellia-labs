import styled from 'styled-components';

const SuccessModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #30c56d;
  color: #ffffff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 10px;
  margin-bottom: 35px;
`;

export const ButtonWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

export default SuccessModalWrapper;
