import React, { Fragment, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import Tag, { TagGroup, LabelTag } from "../../../components/TagGroup";
import { openModal, closeModal } from "@redq/reuse-modal";
import ShareModal from "../../ModalContainer/ShareModal";
import LoginModal from "../../ModalContainer/LoginModal";
import ContactInfoModal from "../../ModalContainer/ContactInfoModal";
import { CURRENCY } from "../../../Config";
import { useMutation } from "@apollo/react-hooks";
import { HANDLE_FAV } from "core/graphql/Mutations";
import AuthHelper from "../../../helpers/authHelper";
import AddressBox from "../../../components/AddressBox";
import Text from "reusecore/src/elements/Text";
import Icon from "../../../components/Icon";
import Button from "reusecore/src/elements/Button";
import InfoBox from "../../../components/UserInfoBox";
import ReadMore from "../../../components/Truncate";
import Box from "reusecore/src/elements/Box";
import AddPostModal from "../../../containers/ModalContainer/AddPostModal";

import {
  ADD_POST,
  SINGLE_CATEGORY_PAGE,
  CHAT_PAGE,
} from "core/navigation/constant";

import {
  DescriptionBlock,
  AlignCenterWrapper,
  InfoBoxWrapper,
  ButtonWrapper,
} from "./description.style";
import { json } from "body-parser";

import { UPDATE_POST_STATUS } from "core/graphql/Mutations";

const timeFormatAMPM = (date) => {
  return date.toLocaleString("en-US", { timeStyle: "short" });
};

const dateFormatAMPM = (date) => {
  return date.toLocaleString("en-US", { dateStyle: "medium" });
};
const Description = ({ postData, isLoggedIn, userId }) => {
  console.log("postData ->", postData);

  let userFavList = [];
  let userNewFavList = [];
  let publishTime = "";
  const [btnLoading, setBtnLoading] = useState(false);
  const favouritedBy =
    postData && postData.favouritedBy ? postData.favouritedBy : [];
  const contactNumber =
    postData && postData.contactNumber ? postData.contactNumber : "";
  const authorImage =
    postData.author && postData.author.image && postData.author.image.url
      ? postData.author.image.url
      : null;
  const authorFallbackImage =
    postData.author && postData.author.image && postData.author.image.largeUrl
      ? postData.author.image.largeUrl
      : null;

  if (favouritedBy.includes(userId)) {
    userFavList.push({ id: postData.id });
  }
  const [userFav, setUserfav] = useState(userFavList);
  const isFavourite = (id, favList) => {
    const favItem = favList.filter((item) => item.id === id);
    if (favItem.length) {
      return true;
    }
    return false;
  };
  const isFav = isFavourite(postData.id, userFav);

  const [updatePostMutation] = useMutation(UPDATE_POST_STATUS);

  const handleFavMutation = useMutation(HANDLE_FAV, {
    variables: {
      fav: {
        id: userId,
        postId: postData.id,
      },
    },
  });
  const handleFavourite = async () => {
    setBtnLoading(true);
    if (isLoggedIn) {
      await AuthHelper.refreshToken();
    }
    console.log("handleFav IN 1");
    if (isLoggedIn) {
      try {
        console.log("handleFav IN 2");
        const { data } = await handleFavMutation();
        console.log("handleFav IN 3");
        userNewFavList =
          data &&
          data.handleFav &&
          data.handleFav.data &&
          data.handleFav.data.length
            ? data.handleFav.data
            : [];
        if (userFav.length !== userNewFavList.length) {
          setUserfav(userNewFavList);
        }
        setBtnLoading(false);
      } catch (error) {
        setBtnLoading(false);
      }
    } else {
      setBtnLoading(false);
      // SHOW MODAL
      openModal({
        config: {
          disableDragging: false,
          minHeight: "auto",
          width: "auto",
          height: "auto",
          enableResizing: false,
          disableDragging: true,
          transition: {
            tension: 150,
          },
        },
        springStyle: {
          backgroundColor: "#ffffff",
          overflowY: "auto",
        },
        modalClass: "customModal",
        closeOnClickOutside: true,
        component: LoginModal,
        componentProps: {},
      });
    }
  };
  let createdTime = "";

  if (postData.createdAt) {
    if (postData.createdAt.seconds) {
      createdTime = new Date(postData.createdAt.seconds * 1000);
    } else if (post.createdAt._seconds) {
      createdTime = new Date(postData.createdAt._seconds * 1000);
    }

    var today = new Date().setHours(0, 0, 0, 0);
    var thatDay = new Date(createdTime).setHours(0, 0, 0, 0);

    if (today === thatDay) {
      publishTime = "Today " + timeFormatAMPM(createdTime);
    } else {
      publishTime = `${dateFormatAMPM(createdTime)}`;
    }
  }

  const handleMarkSold = async () => {
    const data = await updatePostMutation({
      variables: {
        post: { id: postData.id, status: "sold" },
      },
    });
  };

  const adsCategory = (category, index) => {
    return (
      <Link
        key={index}
        href={{
          pathname: `${SINGLE_CATEGORY_PAGE}/${category.slug}`,
          state: {
            termId: category.id,
          },
        }}
      >
        <a>
          <Tag tagContent={category.name} style={{ marginRight: 10 }} />
        </a>
      </Link>
    );
  };
  const handleEditPost = () => {
    openModal({
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      componentProps: {
        data: {
          closeModal,
          userId,
          postData,
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
  return (
    <Fragment>
      <Text
        content={postData.title}
        as="span"
        fontSize={18}
        fontWeight={600}
        color="#333333"
      />
      <TagGroup marginBottom="25px" style={{ marginTop: 25, width: "100%" }}>
        {postData.status === "sold" ? (
          <LabelTag tagContent="Sold Out" />
        ) : (
          <LabelTag tagContent={`${CURRENCY} ${postData.price}`} />
        )}
        {postData.isNegotiable && (
          <Text
            content="Negotiable"
            as="span"
            fontSize={14}
            fontWeight={400}
            color="#595959"
            mb={0}
          />
        )}
      </TagGroup>
      {postData && postData.distance ? (
        <AddressBox
          distance={
            postData.distance
              ? `Approximately ${Math.floor(postData.distance)} km away`
              : ""
          }
          location={
            postData.formattedLocation
              ? postData.formattedLocation.formattedAddress
              : ""
          }
          style={{ marginBottom: "20px" }}
        />
      ) : (
        <p />
        // <p>Please Enable your location to get distance</p>
      )}

      {isLoggedIn &&
      postData.authorId &&
      userId === postData.authorId &&
      postData.status === "publish" ? (
        <Fragment>
          <Button
            title="Edit Listing"
            iconPosition="left"
            style={{ marginBottom: 10, width: "100%" }}
            // onClick={() => Router.push(`${ADD_POST}/${postData.id}`)}
            onClick={() => handleEditPost(postData.id)}
          />

          <Button
            title="Mark Sold"
            iconPosition="left"
            style={{ marginBottom: 38, width: "100%" }}
            onClick={handleMarkSold}
          />
        </Fragment>
      ) : (
        postData.status === "publish" && (
          <Button
            iconPosition="left"
            title="Chat"
            bg="#30C56D"
            style={{ marginBottom: 38, width: "100%" }}
            icon={
              <Icon name="ios-chatboxes" fontSize={19} color="#fff" mr={10} />
            }
            onClick={() =>
              Router.push({
                pathname: CHAT_PAGE,
                query: { post: JSON.stringify(postData) },
              })
            }
          />
        )
      )}

      <InfoBoxWrapper>
        <InfoBox
          imgWidth="45px"
          imgHeight="45px"
          imgRadius={30}
          source={[authorImage, authorFallbackImage]}
          title={
            userId === postData.authorId
              ? "You"
              : postData.author && postData.author.name
              ? postData.author.name
              : ""
          }
          author={postData.authorId}
          postedTime={publishTime !== "" ? `Ad posted at ${publishTime}` : ""}
          style={{
            flexGrow: 1,
          }}
        />

        <ButtonWrapper style={{ flexGrow: 0 }}>
          <Button
            variant="outlined"
            icon={<Icon name="ios-share-alt" fontSize={18} color="#8C8C8C" />}
            height={40}
            width={40}
            className="outlineButton"
            style={{
              marginRight: 10,
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#e2e2e2",
              minHeight: "auto",
              minWidth: "auto",
            }}
            onClick={() =>
              openModal({
                config: {
                  disableDragging: false,
                  className: "shareModal",
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
                    author: postData.author.name,
                    link: process.browser ? window.location.href : null,
                    title: postData.title,
                  },
                },
              })
            }
          />

          <Button
            variant="outlined"
            className="outlineButton"
            isLoading={btnLoading}
            icon={
              <Icon
                name="ios-heart"
                fontSize={18}
                color={isFav ? "#30C56D" : "#8C8C8C"}
              />
            }
            height={40}
            width={40}
            style={{
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: isFav ? "#30C56D" : "#e2e2e2",
              minHeight: "auto",
              minWidth: "auto",
              padding: 0,
            }}
            onClick={handleFavourite}
          />
        </ButtonWrapper>
      </InfoBoxWrapper>
      <Text
        content="Description"
        fontSize={16}
        fontFamily="Poppins"
        fontWeight={600}
        color="#333333"
        mb={15}
        style={{ display: "inline-block" }}
      />
      {postData && (
        <Tag
          bgColor={postData.condition ? "#00b6ff" : "#30C56D"}
          tagContent={postData.condition ? "New" : "Used"}
          size="14px"
          tagColor="#ffffff"
          style={{
            marginLeft: 15,
            fontWeight: 700,
          }}
        />
      )}
      <AlignCenterWrapper style={{ marginBottom: 15 }}>
        <DescriptionBlock>
          <ReadMore character={150}>{postData.content}</ReadMore>
        </DescriptionBlock>
      </AlignCenterWrapper>
      <AlignCenterWrapper style={{ marginTop: 25, marginBottom: 25 }}>
        {postData.categories && postData.categories.length
          ? postData.categories.map(adsCategory)
          : null}
      </AlignCenterWrapper>
    </Fragment>
  );
};

export default Description;
