import styled from 'styled-components';

// Button Text Color

const StyledButton = styled('button')`
  display: flex;
  /* align-items: flex-start; */
  align-items: center;
  background-color: transparent;
  color: ${props => (props.color ? props.color : '#333333')};
  font-size: 16px;
  font-weight: 600;
  font-family: 'Poppins';
  padding: 0;
  border: 0;
  outline: 0;
  width: auto;
  opacity: 1;
  cursor: pointer;
  vertical-align: middle;
  :hover {
    color: ${props => (props.hover ? props.hover : '#30C56D')};
  }
`;
const ButtonText = styled('span')``;
const ButtonIcon = styled('span')`
  /* padding-top: 2px; */
  display: flex;
  margin-right: ${props => (props.iconPosition === 'left' ? '10px' : 0)};
  margin-left: ${props => (props.iconPosition === 'right' ? '10px' : 0)};
`;

export { StyledButton, ButtonIcon, ButtonText };
