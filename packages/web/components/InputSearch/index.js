import React from 'react';
import Router from 'next/router';
import { SearchInputWrapper, SearchInput, SearchButton } from './style';
import { SEARCH_PAGE } from 'core/navigation/constant';
const InputSearch = ({
  type,
  value,
  buttonText,
  buttonIcon,
  placeholder,
  changed,
  style,
  onKeyPress,
  onBlur,
}) => {
  const handleSearch = e => {
    e.preventDefault();
    if (value.trim()) {
      Router.push(`${SEARCH_PAGE}?text=${value.trim()}`);
    }
  };
  return (
    <SearchInputWrapper onSubmit={handleSearch} style={style}>
      <SearchInput
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={changed}
        onKeyPress={onKeyPress}
        onBlur={onBlur}
        aria-label="search"
      />
      <SearchButton type="submit">
        {buttonIcon} {buttonText}
      </SearchButton>
    </SearchInputWrapper>
  );
};
export default InputSearch;
