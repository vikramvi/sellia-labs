import React, { useEffect, useRef, useState } from "react";
import InputSearch from "../InputSearch";
import SearchWrapper, { SearchBox } from "./Search.style";
import Icon from "react-icons-kit";
import { androidSearch } from "react-icons-kit/ionicons/androidSearch";
import Button from "reusecore/src/elements/Button";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
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
          buttonText="Search"
          searchText={searchValue}
          buttonIcon={<Icon icon={androidSearch} size={21} />}
          placeholder="10,000 products available"
        />
      </SearchBox>
    </SearchWrapper>
  );
}
