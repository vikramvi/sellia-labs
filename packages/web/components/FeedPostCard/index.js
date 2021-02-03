import React from "react";
import PropTypes, { element } from "prop-types";
import Card from "reusecore/src/elements/Card";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";
import PlaceholderImage from "core/static/images/thumb-grid-placeholder.svg";
import Box from "reusecore/src/elements/Box";
import Link from "next/link";

import Img from "react-image";
// import Description from "../../containers/SinglePost/Description";
import { timeDifference } from "../../helpers/utility";
import Tag, { TagGroup, LabelTag } from "../../components/TagGroup";

import { SINGLE_CATEGORY_PAGE } from "core/navigation/constant";

const FeedPostCard = ({
  imageSrc,
  title,
  price,
  currency,
  imageStyle,
  titleStyle,
  priceStyle,
  item,
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
  const HeadingContent = () => {
    return (
      <Box>
        <Heading
          content={props.author ? props.author : "Sellia user"}
          style={{ display: "inline", ...titleStyle }}
        />
        {" is "}
        {item.categories && item.categories[0] && (
          <Link
            key={item.categories[0].id}
            href={{
              pathname: `${SINGLE_CATEGORY_PAGE}/${item.categories[0].slug}`,
              state: {
                termId: item.categories[0].id,
              },
            }}
          >
            <a>
              <Tag
                tagContent={item.categories[0].name}
                style={{ marginRight: 10 }}
              />
            </a>
          </Link>
        )}{" "}
        {(item.category && item.category.toLowerCase()) ||
          (item.brand && item.brand)}{" "}
        {item.belongsTo &&
          "for " + (item.belongsTo == "Mine" ? "himself" : item.belongsTo)}
      </Box>
    );
  };

  return (
    <Card {...props}>
      <Box>
        <div>
          <HeadingContent />

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
          {title && <Heading content={title} {...titleStyle} mb="1" mt={15} />}
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

FeedPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  imageSrc: PropTypes.array,
  postNumber: PropTypes.string,
  imageStyle: PropTypes.object,
  titleStyle: PropTypes.object,
  postNumberStyle: PropTypes.object,
};

FeedPostCard.defaultProps = {
  boxShadow: "1px",
  borderRadius: "3px",
  width: "100%",
  mb: "40px",
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

export default FeedPostCard;
