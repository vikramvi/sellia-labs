import styled from 'styled-components';

const ProgressBar = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: ${props => (props.width ? props.width : '100%')};
  height: ${props => (props.height ? props.height : '2px')}px;
  background-color: #e2e2e2;
  border-radius: ${props => (props.radius ? props.radius : 0)};
`;

const InnerProgressBar = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: ${props =>
    props.width ? props.width * props.progress : `${100 * props.progress}%`};
  height: ${props => (props.height ? props.height : '2px')}px;
  background-color: ${props => (props.color ? props.color : '#30c56d')};
  border-radius: ${props => (props.radius ? props.radius : 0)};
`;

export { ProgressBar, InnerProgressBar };
