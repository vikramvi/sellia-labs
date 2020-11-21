import styled from 'styled-components';

const ShareModalWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  /* padding: 32px; */
`;

const ShareLinkWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ShareLink = styled('input')`
  font-size: 16px;
  line-height: 38px;
  color: #595959;
  width: 100%;
  height: 40px;
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  padding: 0 15px;
  border-radius: 3px 0 0 3px;
  outline: 0;

  &:focus {
    box-shadow: none;
  }
`;

const CopyButton = styled('button')`
  background-color: #e2e2e2;
  font-size: 16px;
  line-height: 38px;
  height: 40px;
  color: #8c8c8c;
  font-weight: 700;
  border: none;
  padding: 0 1.5rem;
  cursor: pointer;
  border: 0;
  outline: 0;
  border-radius: 0 3px 3px 0;
  flex-shrink: 0;
  position: relative;
`;

const Notify = styled.span`
  background-color: #eee;
  color: #595959;
  padding: 0 20px;
  position: absolute;
  top: -50px;
  right: 0;
  border-radius: 3px;
  :after {
    content: ' ';
    position: absolute;
    right: 10px;
    bottom: -10px;
    border-top: 10px solid #e2e2e2;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: none;
  }
`;
export { ShareModalWrapper, ShareLinkWrapper, ShareLink, CopyButton, Notify };
