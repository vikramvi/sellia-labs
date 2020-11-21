import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import Input from '../Input';
import LocationWrapper, { SearchResultWrapper } from './style';

const LocationSearchInput = props => {
  const [addressState, setAddressState] = useState({
    address: props.address || '',
  });

  const handleChange = address => {
    setAddressState({ ...addressState, address });
  };

  const handleSelect = selected => {
    setAddressState({ ...addressState, address: selected });
    const address = selected;
    props.handleAddress(address);
    geocodeByAddress(selected)
      .then(results => getLatLng(results[0]))
      .then(latLng => props.handleLocation(latLng))
      .catch(error => console.error('Error', error));
  };

  return (
    <PlacesAutocomplete
      value={addressState.address}
      onChange={handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <LocationWrapper>
          <div>
            <Input {...getInputProps()} required="required" label="Location" />
          </div>
          {addressState.address && (
            <SearchResultWrapper className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                const style = suggestion.active
                  ? {
                      backgroundColor: '#e2e2e2',
                    }
                  : {
                      backgroundColor: '#ffffff',
                    };
                <div
                  {...getSuggestionItemProps(suggestion, {
                    className,
                    style,
                  })}
                >
                  <span>{suggestion.description}</span>
                </div>;
              })}
            </SearchResultWrapper>
          )}
        </LocationWrapper>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
