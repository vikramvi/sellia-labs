import React from "react";
import PropTypes, { element } from "prop-types";
import Card from "reusecore/src/elements/Card";
import Heading from "reusecore/src/elements/Heading";
import Text from "reusecore/src/elements/Text";
import PlaceholderImage from "core/static/images/thumb-grid-placeholder.svg";
import Box from "reusecore/src/elements/Box";
import Link from "next/link";
import Button from "reusecore/src/elements/Button";
import Router from "next/router";
import { CHAT_PAGE } from "core/navigation/constant";

import Img from "react-image";
// import Description from "../../containers/SinglePost/Description";
import { timeDifference } from "../../helpers/utility";
import Tag, { TagGroup, LabelTag } from "../../components/TagGroup";

import PostAction from "../Authorized/PostAction";

import { SINGLE_CATEGORY_PAGE } from "core/navigation/constant";
import profileImg from "core/static/images/user-placeholder.svg";
const profileImgStyle = {
  width: 40,
  height: 40,
  borderRadius: "10%",
  margin: "5px",
};
import { openModal, closeModal } from "@redq/reuse-modal";
import AddPostModal from "../../containers/ModalContainer/AddPostModal";
import { useContext, useEffect } from "react";
import { FeedContext } from "../../contexts/FeedContext";
import DropdownMenu from "../DropdownMenu";
import Icon from "react-icons-kit";
import { more } from "react-icons-kit/ionicons/more";

const FeedPostCard = ({
  id,
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
  const { state, dispatch } = useContext(FeedContext);

  // const postData= {
  //   title,
  //   price,
  //   currency,
  //   imageStyle,
  //   titleStyle,
  //   priceStyle,
  //   props

  // }
  const handleEditPost = () => {
    openModal({
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      componentProps: {
        data: {
          closeModal,
          userId,
          postData: item,
        },
      },
      config: {
        className: "addPostNewModal",
        height: "auto",
        width: "50%",
        transition: {
          tension: 150,
        },
      },
      component: AddPostModal,
    });
  };

  const displayBelongsTo = (param) => {
    switch (param.toLowerCase()) {
      case "my friend's":
        return "for his friend";
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

  const handleClick = (itemSlug) => {
    dispatch({
      type: "UPDATE_FEED_FILTER",
      payload: { key: "categorySlug", value: itemSlug },
    });
  };
  const HeadingContent = () => {
    const avatar = props.avatar ? props.avatar : "";
    console.log("propss===>", props);
    return (
      <Box
        mt="2"
        mb="2"
        flexBox
        justifyContent="flex-start"
        borderBottom="1px solid #e2e2e2"
        alignItems="center"
        style={{ position: "relative" }}
      >
        <Box>
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
        </Box>
        <Box flexDirection="column">
          <Box flexDirection="row">
            <Text
              mr="1"
              ml="2"
              content={props.author ? props.author : "Sellia user"}
              style={{
                display: "inline",
                fontWeight: "bold",
                marginTop: "0px",
                marginBottom: "0px",
              }}
            />
            <Text
              content={"(Yahoo)"}
              style={{
                display: "inline",
                color: "#30C56D",
                fontWeight: "bold",
              }}
            />
            {" is looking "}
            {item.categories && item.categories[0] && (
              <a onClick={() => handleClick(item.categories[0].slug)}>
                <Tag
                  tagContent={item.categories[0].name}
                  style={{
                    marginRight: 10,
                    marginTop: "0px",
                    marginBottom: "0px",
                  }}
                />
              </a>
            )}{" "}
            {(item.category && item.category.toLowerCase()) ||
              (item.brand && item.brand)}
            {"  "}
            {item.belongsTo && displayBelongsTo(item.belongsTo)}
            {"   "}
          </Box>

          <Text
            mr="2"
            ml="2"
            content={"CNF Place, San Jose"}
            style={{
              display: "inline",
              fontWeight: "bold",
              marginTop: "0px",
              marginBottom: "0px",
              fontSize: "12px",
            }}
          />
        </Box>

        {/* temp hidden */}
        <Box style={{ position: "absolute", top: 0, right: 0 }}>
          <DropdownMenu
            content={<Icon icon={more} size={30} color="#595959" />}
            dropdownDirection="right"
            dropdownItems={[
              <Button
                title="Edit Listing"
                iconPosition="left"
                style={{
                  float: "right",
                }}
                // onClick={() => Router.push(`${ADD_POST}/${postData.id}`)}
                onClick={() => handleEditPost(id)}
              />,
            ]}
          />
        </Box>
        {/* {props.isLoggedIn &&
          props.authorId &&
          userId === props.authorId &&
          props.postStatus === "publish" && (
            <Button
              title="Edit Listing"
              iconPosition="left"
              style={{
                marginBottom: 10,

                float: "right",
              }}
              // onClick={() => Router.push(`${ADD_POST}/${postData.id}`)}
              onClick={() => handleEditPost(id)}
            />
          )} */}
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
            {price > 0 && currency && (
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

        <PostAction item={item} userId={userId} />
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
