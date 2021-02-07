import React from "react";
import PropTypes, { element } from "prop-types";
import Card from "reusecore/src/elements/Card";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";
import PlaceholderImage from "core/static/images/thumb-grid-placeholder.svg";
import Box from "reusecore/src/elements/Box";
import Link from "next/link";
import Button from "reusecore/src/elements/Button";
import Icon from "../../components/Icon";
import Router from "next/router";
import { CHAT_PAGE } from "core/navigation/constant";
import ShareModal from "../../containers/ModalContainer/ShareModal";

import Img from "react-image";
// import Description from "../../containers/SinglePost/Description";
import { timeDifference } from "../../helpers/utility";
import Tag, { TagGroup, LabelTag } from "../../components/TagGroup";
import { SINGLE_CATEGORY_PAGE } from "core/navigation/constant";
import profileImg from "core/static/images/user-placeholder.svg";
const profileImgStyle = { width: 40, height: 40, borderRadius: "50%" };
import styled from "styled-components";
import { openModal, closeModal } from "@redq/reuse-modal";

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1023px) {
    width: 100%;
    margin-top: 20px;

    .outlineButton {
      width: calc(50% - 5px);
    }
  }
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
  userId,
  ...props
}) => {
  console.log("props", props);
  // const postData= {
  //   title,
  //   price,
  //   currency,
  //   imageStyle,
  //   titleStyle,
  //   priceStyle,
  //   props

  // }

  const displayBelongsTo = (param) => {
    switch (param.toLowerCase()) {
      case "for myself":
        return "for himself";
      case "mine":
        return "for himself";
      case "for my friend":
        return "for his friend";
      case "for my family":
        return "for his family";
      default:
        return "";
    }
  };

  const HeadingContent = () => {
    const avatar = props.avatar ? props.avatar : "";
    return (
      <Box
        mt="2"
        mb="2"
        flexBox
        justifyContent="flex-start"
        borderBottom="1px solid #e2e2e2"
      >
        <Img
          src={avatar}
          loader={
            <img
              style={profileImgStyle}
              src={profileImg}
              alt="profile picture"
            />
          }
          unloader={
            <img
              style={profileImgStyle}
              src={profileImg}
              alt="profile picture"
            />
          }
          style={profileImgStyle}
        />
        <Text
          mr="2"
          ml="2"
          content={props.author ? props.author : "Sellia user"}
          style={{ display: "inline", fontWeight: "bold" }}
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
        {item.belongsTo && displayBelongsTo(item.belongsTo)}
      </Box>
    );
  };

  const Content = () => {
    return (
      <Box borderBottom="1px solid #e2e2e2">
        <Box
          flexBox
          justifyContent="flex-start"
          borderBottom="1px solid #e2e2e2"
          style={{
            height: "100%",
            width: "100%",
          }}
        >
          <Box
            style={{
              width: "80%",
            }}
            flexBox
            flexDirection="column"
          >
            <Box
              flexBox
              flexDirection="row"
              justifyContent="flex-start"
              alignItem="center"
            >
              {title && (
                <Text
                  mt="2"
                  mb="1"
                  content={title}
                  style={{
                    ...titleStyle,
                    fontSize: "16px",
                    color: "#000000",
                    lineHeight: "20px",
                    fontWeight: "bold",
                  }}
                />
              )}
              {"   "}
              {props.condition && (
                <Text
                  mt="2"
                  ml="2"
                  content={props.condition && "(" + props.condition + ")"}
                  style={{
                    ...titleStyle,
                    fontSize: "12px",
                    lineHeight: "20px",
                    color: "grey",
                    fontWeight: "bold",
                  }}
                />
              )}{" "}
            </Box>

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

        {props.content && (
          <Text content={props.content} {...priceStyle} mb="2" mt="2" />
        )}
      </Box>
    );
  };

  const ContentImage = () => {
    return (
      <Box borderBottom="1px solid #e2e2e2">
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
              height: "50px",
              bottom: 0,
              width: "100%",
            }}
          >
            <Box flexBox flexDirection="column">
              <Box
                mt="1"
                flexBox
                flexDirection="row"
                justifyContent="center"
                alignItem="center"
              >
                {title && (
                  <Text
                    mb="0"
                    content={title}
                    style={{
                      ...titleStyle,
                      fontSize: "14px",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  />
                )}
                {"   "}
                {props.condition && (
                  <Text
                    ml="2"
                    content={props.condition && "(" + props.condition + ")"}
                    style={{
                      ...titleStyle,
                      fontSize: "10px",
                      color: "grey",
                      fontWeight: "bold",
                    }}
                  />
                )}
              </Box>

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
                />
              )}
            </Box>
            <Box></Box>
            <Box></Box>
            <Box
              flexBox
              flexDirection="column"
              justifyContent="flex-end"
              alignItems="flex-end"
            >
              {price && currency && (
                <Text
                  mt="2"
                  mb="0"
                  content={`${currency} ${price}`}
                  style={{
                    color: "#30C56D",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                />
              )}
              {props.originalPrice && currency && (
                <del
                  style={{
                    marginRight: "0px",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    fontSize: "12px",
                  }}
                >
                  ${props.originalPrice}
                </del>
              )}
            </Box>
          </Box>
        </div>

        {props.content && (
          <Text content={props.content} {...priceStyle} mb="5" mt="5" />
        )}
      </Box>
    );
  };

  console.log("imageSrc -", imageSrc);
  return (
    <Card
      {...props}
      style={{
        boxShadow:
          "rgba(60, 64, 67, 0.15) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <Box
        style={{
          margin: "10px",
        }}
      >
        <HeadingContent />

        {imageSrc && imageSrc[0] ? <ContentImage /> : <Content />}

        <ButtonWrapper style={{ flexGrow: 0 }}>
          {item.status === "publish" && userId !== item.authorId && (
            <Button
              iconPosition="left"
              title="Send message"
              bg="#FFFFFF"
              style={{
                marginBottom: 2,
                width: "30%",
                fontSize: "12px",
                height: "30px",
                color: "#1e2d8f",
                marginRight: 2,
              }}
              icon={
                <Icon
                  name="ios-chatboxes"
                  fontSize={18}
                  color="#1e2d8f"
                  mr={10}
                />
              }
              onClick={() => {
                Router.push(
                  {
                    pathname: CHAT_PAGE,
                    query: { post: JSON.stringify(item) },
                  },
                  CHAT_PAGE
                );
              }}
            />
          )}

          <Button
            iconPosition="left"
            bg="#FFFFFF"
            title="Share"
            icon={<Icon name="ios-share-alt" fontSize={18} color="#1e2d8f" />}
            style={{
              fontSize: "12px",

              marginBottom: 2,
              color: "#1e2d8f",
              width: "20%",

              height: "30px",
            }}
            onClick={() =>
              openModal({
                config: {
                  disableDragging: false,
                  width: "auto",
                  height: "auto",
                  enableResizing: false,
                  disableDragging: true,
                  transition: {
                    tension: 150,
                  },
                },
                withRnd: false,
                closeOnClickOutside: true,
                component: ShareModal,
                componentProps: {
                  data: {
                    author: item.author.name,
                    link: process.browser ? window.location.href : null,
                    title: item.title,
                  },
                },
              })
            }
          />
        </ButtonWrapper>
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
    color: "#fff",
    borderRadius: "3px",
    objectFit: "fill",
  },
  titleStyle: {
    fontSize: "16px",
    mt: "0px",
    color: "#ffffff",
    fontWeight: "bold",
  },
};

export default FeedPostCard;
