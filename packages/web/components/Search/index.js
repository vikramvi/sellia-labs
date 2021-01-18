import React, { useEffect, useRef, useState } from "react";
import InputSearch from "../InputSearch";
import SearchWrapper, { SearchBox } from "./Search.style";
import Icon from "react-icons-kit";
import { androidSearch } from "react-icons-kit/ionicons/androidSearch";
import Button from "reusecore/src/elements/Button";

import { getUrlToState } from "../../helpers/urlHandler";

export default function Search() {
  const urlState = getUrlToState();

  const [searchValue, setSearchValue] = useState(urlState.text);
  const [toggleSearch, setToggleSearch] = useState(false);

  let searchRef = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setToggleSearch(false);
    }
  };

  return (
    <SearchWrapper ref={searchRef}>
      <div style={{ display: "flex" }}>
        <Button
          icon={<Icon icon={androidSearch} size={24} />}
          variant="outlined"
          color="#8C8C8C"
          onClick={() => setToggleSearch(true)}
          style={{
            marginLeft: "auto",
            border: "none",
          }}
        />
      </div>
      <SearchBox className={"expanded"}>
        <InputSearch
          type="text"
          value={searchValue}
          changed={handleSearchInput}
          searchText={searchValue}
          buttonIcon={<Icon icon={androidSearch} size={21} />}
          placeholder="Search Sellia"
        />
      </SearchBox>
    </SearchWrapper>
  );
}
