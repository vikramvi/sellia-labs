import React from 'react';
import PropTypes from 'prop-types';
import { Images, ImageHolder } from './imageHolder.style';
const IconBox = ({
  imgWidth,
  imgHeight,
  className,
  style,
  imgStyle,
  source,
}) => {
  return (
    <ImageHolder
      style={style}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      className={className}
    >
      <Images style={imgStyle} src={source} />
    </ImageHolder>
  );
};

IconBox.propTypes = {
  /** Custom style for the Image Holder */
  style: PropTypes.any,

  /** Custom width for the Image Holder */
  imgWidth: PropTypes.string,

  /** Custom height for the Image Holder */
  imgHeight: PropTypes.string,

  /** Custom className for the Image Holder */
  className: PropTypes.string,

  /** Custom Style for the Image */
  imgStyle: PropTypes.any,
};

export default IconBox;
