import React, { useState } from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import Input from '../Input';
import LocationWrapper, { SearchResultWrapper } from './style';

const LocationSearchInput = props => {
  const handleSelect = selected => {
    const address = selected;
    props.handleAddress(address);
    geocodeByAddress(selected)
      .then(results => getLatLng(results[0]))
      .then(latLng => props.handleLocation(latLng, address))
      .catch(error => console.error('Error', error));
  };

  const handleCloseClick = () => {
    setAddressState({ ...addressState, address: '' });
  };

  return (
    <PlacesAutocomplete
      value={props.address}
      onChange={props.handleChange}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <LocationWrapper>
          <div>
            <Input {...getInputProps()} required="required" label="Location" />
            {/* {addressState.address.length > 0 && (
                <button onClick={handleCloseClick}>x</button>
              )} */}
          </div>
          {props.address && (
            <SearchResultWrapper className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? {
                      backgroundColor: '#e2e2e2',
                    }
                  : {
                      backgroundColor: '#ffffff',
                    };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </SearchResultWrapper>
          )}
        </LocationWrapper>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationSearchInput;
