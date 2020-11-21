import styled, { keyframes } from 'styled-components';
const move = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
`;
export const Progress = styled.div`
  height: 20px;
  position: relative;
  border-radius: 20px;
  padding: 10px;
  background-color: rgb(43, 194, 83);
  box-shadow: inset 0 -1px 1px rgba(255, 255, 255, 0.3);
  overflow: hidden;
  margin-bottom: 30px;
  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    z-index: 1;
    background-size: 50px 50px;
    animation: ${move} 2s linear infinite;
    overflow: hidden;
  }
`;
