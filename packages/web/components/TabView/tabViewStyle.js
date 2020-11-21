import styled from 'styled-components';
import { palette } from 'styled-theme';

const TouchableOpacity = styled('button')`
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  border: 0;
  outline: 0;
  padding: 0;
  cursor: pointer;
`;

const MenuText = styled('span')`
  color: ${props =>
    props.menuTextColor ? props.menuTextColor : palette('text', 2)};
  font-size: ${props => (props.menuTextSize ? props.menuTextSize : 16)}px;
  line-height: ${props =>
    props.menuTextLineHeight ? props.menuTextLineHeight : 19}px;
  text-transform: capitalize;
  font-weight: 500;
`;

const CountText = styled('span')`
  color: ${props =>
    props.countTextColor ? props.countTextColor : palette('text', 1)};
  font-size: ${props => (props.countTextSize ? props.countTextSize : 16)}px;
  line-height: ${props =>
    props.countTextLineHeight ? props.countTextLineHeight : 19}px;
  text-transform: capitalize;
  font-weight: 500;
  margin-left: 10px;
`;

export { TouchableOpacity, MenuText, CountText };
