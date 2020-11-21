import React from 'react';
// import Image from 'react-image';
import PropTypes from 'prop-types';
import Card from 'reusecore/src/elements/Card';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import PlaceholderImage from 'core/static/images/categoryPlaceholder.svg';

const CategoryGridCard = ({
  title,
  postNumber,
  imageSrc,
  imageStyle,
  titleStyle,
  postNumberStyle,
  ...props
}) => {
  const imgSrc = imageSrc ? imageSrc : PlaceholderImage;
  return (
    <Card {...props} style={{ textAlign: 'center' }}>
      {imgSrc && <img src={imgSrc} alt={title} style={imageStyle} />}
      {title && <Heading content={title} {...titleStyle} />}
      {postNumber && <Text content={postNumber} {...postNumberStyle} />}
    </Card>
  );
};

CategoryGridCard.propTypes = {
  title: PropTypes.string.isRequired,
  source: PropTypes.string,
  postNumber: PropTypes.string,
  imageStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  postNumberStyle: PropTypes.object,
};

CategoryGridCard.defaultProps = {
  color: '#595959',
  bg: '#FFFFFF',
  ml: '0',
  mr: '0',
  minHeight: '150px',
  border: '1px solid #e2e2e2',
  boxShadow: 'none',
  p: '40px 32px',
  titleStyle: {
    fontSize: '15px',
    fontWeight: 'normal',
    mb: '0',
    textAlign: 'center',
    mt: '10px',
  },
  imageStyle: {
    borderRadius: '100%',
    objectFit: 'cover',
    height: '60px',
    width: '60px',
    margin: 'auto',
    overflow: 'hidden',
  },
  postNumberStyle: {
    mb: 0,
    mt: 10,
    textAlign: 'center',
  },
};

export default CategoryGridCard;
