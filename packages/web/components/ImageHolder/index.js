import React from 'react';
import PropTypes from 'prop-types';
import { Images, ImageHolder } from './imageHolder.style';
import BannerImg from 'core/static/images/single-post-img.png';
const ImageBox = ({
  imgWidth,
  imgHeight,
  className,
  style,
  imgStyle,
  source,
  as,
}) => {
  const imgSrc = source ? source : BannerImg;
  return (
    <ImageHolder
      as={as}
      style={style}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      className={className}
    >
      <Images src={imgSrc} alt="image" style={imgStyle} />
    </ImageHolder>
  );
};

ImageBox.propTypes = {
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

export default ImageBox;
