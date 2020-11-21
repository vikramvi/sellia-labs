import styled from 'styled-components';

const FormGroup = styled('div')`
  position: relative;
  span.errorMsg {
    position: absolute;
    bottom: -30px;
    right: 0;
    font-size: 12px;
    color: red;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.96);
    transition: all 300ms ease-out;
  }
  &.hasErrorMsg {
    span.errorMsg {
      opacity: 1;
      visibility: visible;
      transform: scale(1);
      bottom: -22px;
      right: 0;
    }
  }
`;

const ErrorNotification = styled('p')`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  width: 100%;
  color: #f15251;
  /* padding: 10px 15px; */
  border-radius: 3px;
  /* border: 1px solid #f15251; */
`;

export { FormGroup, ErrorNotification };
