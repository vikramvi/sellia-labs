import styled from 'styled-components';
export const SearchInputWrapper = styled.form`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 49px;
  border-radius: 3px;
  background-color: #ffffff;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    line-height: 40px;
  }
`;

export const SearchInput = styled.input`
  line-height: 49px;
  flex-grow: 1;
  font-size: 14px;
  border: none;
  padding-left: 1rem;

  @media screen and (max-width: 767px) {
    line-height: 40px;
  }

  &:focus {
    outline: 0;
  }

  &::-webkit-input-placeholder {
    font-size: 16px;
    color: #8c8c8c;
  }

  &:-moz-placeholder {
    font-size: 16px;
    color: #8c8c8c;
  }

  &::-moz-placeholder {
    font-size: 16px;
    color: #8c8c8c;
  }
  &:-ms-input-placeholder {
    font-size: 16px;
    color: #8c8c8c;
  }
`;

export const SearchButton = styled.button`
  background-color: #30c56d;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  font-family: 'Lato';
  font-weight: bold;
  border: none;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }

  a {
    font-size: 16px;
    color: #ffffff;
    font-family: 'Lato';
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 500px) {
    padding-left: 12px;
    padding-right: 12px;
    font-size: 14px;
    min-width: 50px;

    svg {
      margin-right: 5px;
    }

    a {
      font-size: 14px;
    }
  }
`;
