import styled from 'styled-components';

const SearchWrapper = styled('div')`
  position: relative;
  width: 100%;
  margin-left: 50px;

  @media only screen and (max-width: 479px) {
    margin-left: 0px;
  }
`;

export const SearchBox = styled('div')`
  border-radius: 3px;
  position: absolute;
  border: 1px solid #e2e2e2;
  top: 0;
  right: 0;

  @media only screen and (max-width: 767px) {
    top: 3px;

    form {
      height: 40px;
    }
  }

  &.expanded {
    width: 100%;
    opacity: 1;
    transition: width ease-in-out 500ms, opacity ease-in-out 500ms;

    @media only screen and (max-width: 767px) {
      width: calc(100% - 10px);
    }
  }

  &.collapsed {
    width: 0;
    opacity: 0;
    transition: width ease-in-out 500ms, opacity ease-in-out 500ms;
  }
`;

export const SearchResultWrapper = styled('ul')`
  box-sizing: border-box;
  position: absolute;
  background-color: #fff;
  z-index: 10;
  width: 100%;
  list-style-type: none;
  border-radius: 0 0 3px 3px;
  padding: 0;
  width: 100%;
  margin: 4px 0 0;
  padding-bottom: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.16);

  &.showSuggestion {
    opacity: 1;
    transition: opacity ease-in-out 500ms;
  }

  &.hideSuggestion {
    opacity: 0;
    transition: opacity ease-in-out 500ms;
  }
`;

export const ItemWrapper = styled('li')`
  padding: 0.7rem 1.5rem;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #333;

  &:hover {
    background-color: #f4f4f4;
  }
`;

export const SubmenuHeading = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem 0.5rem;

  h3 {
    font-size: 14px;
    font-family: 'Poppins';
    font-weight: 600;
    margin: 0;
  }

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 400;
    color: #333;
    box-shadow: none;
    cursor: pointer;
    padding: 0;
  }
`;

export default SearchWrapper;
