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

    return (
      // <Link
      //   href={`${SINGLE_POST_PAGE}/[slug]`}
      //   as={`${SINGLE_POST_PAGE}/${slug}`}
      // >
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
      // </Link>
    );
  };

  return (
    <>
      <NavSidebar></NavSidebar>
      <Box mt={20} ml={"25%"} mr={"25%"}>
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
