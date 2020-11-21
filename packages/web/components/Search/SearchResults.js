import React from 'react';
import {
  SearchResultWrapper,
  ItemWrapper,
  SubmenuHeading,
} from './Search.style';

const SearchResults = ({
  suggestions,
  itemStyle,
  wrapperStyle,
  setSuggestionValue,
  clearSearch,
  className,
  ref,
}) => {
  const setSuggestion = suggestion => {
    setSuggestionValue(suggestion);
  };

  return (
    <SearchResultWrapper ref={ref} {...wrapperStyle} className={className}>
      <SubmenuHeading>
        <h3>Recent Search</h3> <button onClick={clearSearch}>Clear</button>
      </SubmenuHeading>
      {suggestions.map((suggestion, i) => (
        <ItemWrapper
          {...itemStyle}
          key={i}
          onClick={() => setSuggestion(suggestion)}
        >
          {suggestion}
        </ItemWrapper>
      ))}
    </SearchResultWrapper>
  );
};

export default SearchResults;
