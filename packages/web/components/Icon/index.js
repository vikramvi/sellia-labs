import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSize, color, space } from 'styled-system';

const IconFont = styled('i')(fontSize, color, space);

const Icon = ({ name, ...props }) => {
  return <IconFont className={`ion-${name}`} {...props} />;
};

Icon.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  ml: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  mr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
  lineHeight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]),
};

Icon.defaultProps = {
  color: '#333333',
  fontSize: 24,
};

export default Icon;
