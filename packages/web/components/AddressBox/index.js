import React from 'react';
import PropTypes from 'prop-types';
import { AddressBox, Address, Place, Location } from './style';
import IconBox from '../ImageHolder/IconHolder';
import LocationIcon from 'core/static/images/location.png';

const AddressComp = ({ style, className, location, distance }) => {
  return (
    <AddressBox style={style} className={className}>
      <Address>
        <Place location={location}>{location}</Place>
        <Location distance={distance}>{distance}</Location>
      </Address>

      <IconBox source={LocationIcon} imgWidth="28px" imgHeight="28px" />
    </AddressBox>
  );
};

AddressBox.propTypes = {
  /** Place name. */
  location: PropTypes.string,

  /** Location Name */
  distance: PropTypes.string,

  /** Custom style */
  style: PropTypes.any,

  /** Class name*/
  className: PropTypes.string,
};

export default AddressComp;
