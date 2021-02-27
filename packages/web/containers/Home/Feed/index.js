import React, { Fragment, useContext, useState, useEffect } from "react";

import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { GET_POST } from "core/graphql/Post.query";
import { getUrlToState, setStateToUrl } from "../../../helpers/urlHandler";

import { RECENT_POST_PAGE, SINGLE_POST_PAGE } from "core/navigation/constant";
import { PostLoader } from "../../../components/Placeholder";
import NavSidebar from "../../../components/NavSidebar";

import ListGrid from "reusecore/src/elements/ListGrid";
import Box from "reusecore/src/elements/Box";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import NoItemFound from "../../../components/NoItemFound";
import OnError from "../../../components/OnError";
import { FeedContext } from "../../../contexts/FeedContext";
import "./style.css";
import Img from "react-image";
import profileImg from "core/static/images/user-placeholder.svg";
import { openModal, closeModal } from "@redq/reuse-modal";
import { useRouter } from "next/router";
import AddPostModal from "../../ModalContainer/AddPostModal";
import { GET_AUTHOR } from "core/graphql/Author";

import FeedAllPost from "./FeedAllPost";
import FeedCategoryPost from "./FeedCategoryPost";
import FeedSinglePost from "./FeedSinglePost";

export default function Feed({ userId, isLoggedIn, location, loginUser }) {
  const {
    query: { slug },
  } = useRouter();

  const { state, dispatch } = useContext(FeedContext);
  const { feedFilter } = state;

  const handleAddPost = () => {
    openModal({
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      closeComponent: () => <></>,
      componentProps: {
        data: {
          closeModal,
          userId,
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

  const renderFeedComponent = () => {
    if (slug) {
      return <FeedSinglePost userId={userId} />;
    } else if (!feedFilter.categorySlug || feedFilter.categorySlug == "") {
      return <FeedAllPost userId={userId} />;
    } else {
      return (
        <FeedCategoryPost
          userId={userId}
          categorySlug={feedFilter.categorySlug}
        />
      );
    }
  };

  return (
    <Box mt={0} ml={"25%"} mr={"25%"}>
      <NavSidebar></NavSidebar>
      <Box>
        <div className="css-1dkvlfs">
          <Box
            mb={15}
            aria-live="off"
            id="main_content"
            className="_19x6ASDS _1eW-tOzA"
            onClick={handleAddPost}
          >
            <span className="_1EhANPqp">
              <div className="avatar">
                <Img
                  src={profileImg}
                  style={{ width: 35, height: 35, borderRadius: "50%" }}
                  loader={<img src={profileImg} alt="profile picture" />}
                  unloader={<img src={profileImg} alt="profile picture" />}
                />
              </div>
            </span>
            <div className="_3zGsrPl_ _2wCEotpQ">
              <div className="_1IukxMPo _2YwTbt9g _1uAKrEJw">
                <span>
                  Post a <span className="prompt-bold">message</span>,{" "}
                  <span className="prompt-bold">listing</span> to your
                  neighborhood
                </span>
              </div>
            </div>
          </Box>
        </div>

        {renderFeedComponent()}
      </Box>
    </Box>
  );
}
