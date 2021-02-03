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
import Avatar from "core/static/images/user-placeholder.svg";

import styled from "styled-components";

const Image = styled(Img)`
  width: 45px;
  height: 45px;
  border-radius: 0;
  object-fit: cover;
`;

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
      <Box
        mt="2"
        mb="2"
        flexBox
        justifyContent="flex-start"
        style={{ lineHeight: "45px" }}
      >
        <Image
          src={[
            props.author && props.author.image && props.author.image.url,
            props.author && props.author.image && props.author.image.url,
          ]}
          loader={<Image src={Avatar} />}
          unloader={<Image src={Avatar} />}
        />
        <Text
          mr="2"
          ml="2"
          content={props.author ? props.author : "Sellia user"}
          style={{ display: "inline", fontWeight: "bold" }}
        />
        <Text mr="2" content={"is"} style={{ display: "inline" }} />
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
          <div className="real-estate-promo-card-image">
            {imageSrc && (
              <Img
                src={imageSrc}
                alt={title}
                style={imageStyle}
                loader={<img src={PlaceholderImage} />}
                unloader={<img src={PlaceholderImage} />}
              />
            )}

            <Box
              flexBox
              justifyContent="space-around"
              style={{
                background: "rgb(0, 0, 0)" /* fallback color */,
                background: "rgba(0, 0, 0, 0.5)",
                position: "absolute",
                height: "50",
                bottom: 0,
                width: "100%",
              }}
            >
              <Box flexBox flexDirection="column">
                {title && (
                  <Text
                    mt="2"
                    mb="1"
                    content={title}
                    style={{
                      ...titleStyle,
                      fontSize: "16px",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  />
                )}
                {props.createdAt && (
                  <Text
                    style={{
                      color: "#30C56D",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                    content={timeDifference(
                      new Date().getTime(),
                      props.createdAt * 1000
                    )}
                    mb="2"
                    mt="1"
                  />
                )}
              </Box>
              <Box></Box>
              <Box></Box>
              <Box flexBox flexDirection="column">
                {price && currency && (
                  <Text
                    content={`${currency} ${price}`}
                    style={{ color: "#30C56D", fontWeight: "bold" }}
                  />
                )}
              </Box>
            </Box>
          </div>

          {props.content && (
            <Text content={props.content} {...priceStyle} mb="2" mt="2" />
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
    width: "100%",
    height: "210px",
    color: "#fff",
    borderRadius: "3px",
    objectFit: "cover",
  },
  titleStyle: {
    fontSize: "16px",
    mt: "0px",
    color: "#ffffff",
    fontWeight: "bold",
  },
};

export default FeedPostCard;
