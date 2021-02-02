import React from 'react';
import PropTypes from 'prop-types';
import Card from 'reusecore/src/elements/Card';
import Heading from 'reusecore/src/elements/Heading';
import Text from 'reusecore/src/elements/Text';
import PlaceholderImage from 'core/static/images/thumb-grid-placeholder.svg';
import Box from 'reusecore/src/elements/Box';

import Img from 'react-image';
// import Description from "../../containers/SinglePost/Description";
import { timeDifference } from '../../helpers/utility';
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
  // const postData= {
  //   title,
  //   price,
  //   currency,
  //   imageStyle,
  //   titleStyle,
  //   priceStyle,
  //   props

  // }
  return (
    <Card {...props}>
      <Box>
        <div>
          {props.author && (
            <Text content={props.author} {...priceStyle} mb="0" />
          )}
          {title && <Heading content={title} {...titleStyle} mb="1" mt={15} />}
          {imageSrc && (
            <div className="real-estate-promo-card-image">
              <Img
                src={imageSrc}
                alt={title}
                style={imageStyle}
                loader={<img src={PlaceholderImage} />}
                unloader={<img src={PlaceholderImage} />}
              />
            </div>
          )}
          {price && currency && (
            <Text content={`${currency} ${price}`} {...priceStyle} mb="0" />
          )}
          {props.createdAt && (
            <Text
              content={timeDifference(
                new Date().getTime(),
                props.createdAt * 1000
              )}
              {...priceStyle}
              mb="0"
            />
          )}
          {props.content && (
            <Text content={props.content} {...priceStyle} mb="0" />
          )}
        </div>

        {/* <Description
          // loading={loading}
          postData={postData}
          // isLoggedIn={isLoggedIn}
          // userId={userId}
        /> */}
      </Box>
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
  boxShadow: '1px',
  borderRadius: '3px',
  width: '100%',
  mb: '40px',
  color: '#595959',
  imageStyle: {
    width: '210px',
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
