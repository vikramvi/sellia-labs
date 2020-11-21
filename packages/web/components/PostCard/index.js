import React from 'react';
import PropTypes from 'prop-types';
import Card from 'reusecore/src/elements/Card';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import PlaceholderImage from 'core/static/images/thumb-grid-placeholder.svg';
import Img from 'react-image';
const PostCard = ({
  imageSrc,
  title,
  price,
  currency,
  imageStyle,
  titleStyle,
  priceStyle,
  ...props
}) => {
  return (
    <Card {...props}>
      {imageSrc && (
        <Img
          src={imageSrc}
          alt={title}
          style={imageStyle}
          loader={<img src={PlaceholderImage} />}
          unloader={<img src={PlaceholderImage} />}
        />
      )}
      {title && <Heading content={title} {...titleStyle} mb="1" mt={15} />}
      {price && currency && (
        <Text content={`${currency} ${price}`} {...priceStyle} mb="0" />
      )}
    </Card>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.array,
  postNumber: PropTypes.string,
  imageStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  postNumberStyle: PropTypes.object,
};

PostCard.defaultProps = {
  boxShadow: 'none',
  borderRadius: '3px',
  mb: '40px',
  color: '#595959',
  imageStyle: {
    width: '100%',
    height: '210px',
    color: '#fff',
    borderRadius: '3px',
    objectFit: 'cover',
  },
  titleStyle: {
    fontSize: '14px',
    mt: '10px',
  },
};

export default PostCard;
