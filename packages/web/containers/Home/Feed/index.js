import React from "react";
import Link from "next/link";
import { CURRENCY } from "../../../Config";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POST } from "core/graphql/AllPost.query";
import { RECENT_POST_PAGE, SINGLE_POST_PAGE } from "core/navigation/constant";
import { PostLoader } from "../../../components/Placeholder";
import NavSidebar from "../../../components/NavSidebar";

import FeedPostCard from "../../../components/FeedPostCard";
import ListGrid from "reusecore/src/elements/ListGrid";
import Box from "reusecore/src/elements/Box";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import NoItemFound from "../../../components/NoItemFound";
import OnError from "../../../components/OnError";
import { FeedContext } from "../../../contexts/FeedContext";
import { useContext, useEffect } from "react";
import { GET_CATEGORY_POST } from "core/graphql/CategoryPost.query";
import "./style.css";
import Img from "react-image";
import profileImg from "core/static/images/user-placeholder.svg";
import { openModal, closeModal } from "@redq/reuse-modal";

export default function Feed({ userId, isLoggedIn }) {
  const { state, dispatch } = useContext(FeedContext);
  const { feedFilter } = state;

  console.log("feedFilter.categorySlug --", feedFilter.categorySlug);

  let recentPosts;
  let queryResult;
  let QUERY_VARIABLES;

  if (!feedFilter.categorySlug || feedFilter.categorySlug == "") {
    // QUERY SECTION
    QUERY_VARIABLES = {
      LIMIT: 20,
    };
    queryResult = useQuery(GET_ALL_POST, {
      variables: QUERY_VARIABLES,
    });

    const { data, loading, error, fetchMore } = queryResult;
    recentPosts = data && data.posts ? data.posts.data : [];
    // Error Rendering.
    if (error) return <OnError />;
  } else {
    QUERY_VARIABLES = {
      SLUG: feedFilter.categorySlug,
      LIMIT: 20,
    };
    queryResult = useQuery(GET_CATEGORY_POST, {
      variables: QUERY_VARIABLES,
    });
    // Extract Post Data
    const { data, loading, error, fetchMore } = queryResult;
    console.log("data ---", data);
    recentPosts =
      data && data.category && data.category.posts.data
        ? data.category.posts.data
        : [];
    // Error Rendering.
    if (error) return <OnError />;
  }

  // Post Loop Control Area
  console.log("Recent Posts===>", recentPosts);
  const renderRecentPost = (item) => {
    const {
      title,
      slug,
      price,
      content,

      condition,
      originalPrice,
      authorId,
      status,
      id,
    } = item;

    const { name, image } = item.author || {};
    const { seconds } = item.createdAt || {};
    const { url, largeUrl } = item.image || {};

    const handleAddPost = () => {
      openModal({
        overlayClassName: "customeOverlayClass",
        closeOnClickOutside: false,
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

    return (
      // <Link
      //   href={`${SINGLE_POST_PAGE}/[slug]`}
      //   as={`${SINGLE_POST_PAGE}/${slug}`}
      // >
      <>
        <a>
          <FeedPostCard
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-start",
            }}
            imageStyle={{
              marginRight: 20,
            }}
            currency={CURRENCY}
            title={title}
            price={price}
            imageSrc={[url, largeUrl]}
            author={name}
            userId={userId}
            createdAt={seconds}
            content={content}
            item={item}
            avatar={image?.url}
            condition={condition}
            originalPrice={originalPrice}
            isLoggedIn={isLoggedIn}
            authorId={authorId}
            postStatus={status}
            id={id}
          />
        </a>
      </>
    );
  };

  return (
    <>
      <NavSidebar></NavSidebar>
      <Box mt={20} ml={"25%"} mr={"25%"}>
        <div class="css-1dkvlfs">
          <Box
            mb={15}
            aria-live="off"
            id="main_content"
            class="_19x6ASDS _1eW-tOzA"
          >
            <span class="_1EhANPqp">
              <div class="avatar">
                <Img
                  src={profileImg}
                  style={{ width: 35, height: 35, borderRadius: "50%" }}
                  loader={<img src={profileImg} alt="profile picture" />}
                  unloader={<img src={profileImg} alt="profile picture" />}
                />
              </div>
            </span>
            <div class="_3zGsrPl_ _2wCEotpQ">
              <div class="_1IukxMPo _2YwTbt9g _1uAKrEJw">
                <span>
                  Post a <span class="prompt-bold">message</span>,{" "}
                  <span class="prompt-bold">listing</span> to your neighborhood
                </span>
              </div>
            </div>
          </Box>
        </div>
        {!recentPosts ? (
          <NoItemFound />
        ) : (
          <ListGrid
            data={recentPosts}
            columnWidth={[1]}
            limit={QUERY_VARIABLES.LIMIT}
            component={renderRecentPost}
            loading={queryResult.loading}
            placeholder={<PostLoader />}
          />
        )}
        <Link href={RECENT_POST_PAGE}>
          <a>
            <Button
              title="See all"
              color="#8c8c8c"
              fontWeight={500}
              variant="textButton"
            />
          </a>
        </Link>
      </Box>
    </>
  );
}
