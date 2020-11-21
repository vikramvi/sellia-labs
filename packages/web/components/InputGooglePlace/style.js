import styled from 'styled-components';
const LocationWrapper = styled('div')`
  position: relative;
  input {
    color: #595959;
  }
`;
export const SearchResultWrapper = styled('div')`
  box-sizing: border-box;
  position: absolute;
  background-color: #ffffff;
  border: 1px solid #e2e2e2;
  z-index: 10;
  width: 100%;
  list-style-type: none;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);
  margin-top: -15px;
  > div {
    cursor: pointer;
    color: #595959;
    padding: 10px 20px;
    font-size: 16px;
  }
  &:empty {
    display: none;
  }
`;
export default LocationWrapper;
