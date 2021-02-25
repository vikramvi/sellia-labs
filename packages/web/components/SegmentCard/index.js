import React from "react";
import PropTypes from "prop-types";
import Card from "reusecore/src/elements/Card";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";
import PlaceholderImage from "core/static/images/thumb-grid-placeholder.svg";
import Box from "reusecore/src/elements/Box";

import Img from "react-image";
const SegmentCard = ({
  imageSrc,
  title,
  price,
  currency,
  imageStyle,
  titleStyle,
  priceStyle,
  titleClass,
  ...props
}) => {
  return (
    <Card {...props}>
      <Box className={titleClass}>
        {title && <Heading content={title} {...titleStyle} mb="1" mt={10} />}
      </Box>
    </Card>
  );
};

SegmentCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.array,
  postNumber: PropTypes.string,
  imageStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  postNumberStyle: PropTypes.object,
};

SegmentCard.defaultProps = {
  boxShadow: "1px",
  borderRadius: "3px",
  width: "100%",
  mb: "10px",
  color: "#595959",
  imageStyle: {
    width: "210px",
    height: "210px",
    color: "#fff",
    borderRadius: "3px",
    objectFit: "cover",
  },
  titleStyle: {
    fontSize: "14px",
    mt: "10px",
  },
};

export default SegmentCard;
