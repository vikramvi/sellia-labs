import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POST } from "core/graphql/AllPost.query";
import ListGrid from "reusecore/src/elements/ListGrid";
import { PostLoader } from "../../../../components/Placeholder";
import FeedPostCard from "../../../../components/FeedPostCard";
import { CURRENCY } from "../../../../Config";
import { GET_CATEGORY_POST } from "core/graphql/CategoryPost.query";

const FeedCategoryPost = ({ userId, categorySlug }) => {
  const [page, paginate] = useState(1);
  const [loadingMore, toggleLoading] = useState(false);

  // QUERY SECTION
  const QUERY_VARIABLES = {
    SLUG: categorySlug,
    limit: 4,
    page: page,
  };
  const queryResult = useQuery(GET_CATEGORY_POST, {
    variables: QUERY_VARIABLES,
  });

  const { data, loading, error, fetchMore } = queryResult;

  console.log("FeedCategoryPost===>", data);

  const recentPosts =
    data && data.category && data.category.posts.data
      ? data.category.posts.data
      : [];
  const postCount = recentPosts ? recentPosts.length : 1;
  const totalPost =
    data && data.category && data.category.posts
      ? data.category.posts.total
      : 1;

  // Error Rendering.
  if (error) return <OnError />;

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
      gallery,
      formattedLocation,
      id,
    } = item;

    const { company, name, image } = item.author || {};
    const { seconds } = item.createdAt || {};
    const { url, largeUrl } = item.image || {};

    return (
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
          postGallery={gallery}
          content={content}
          item={item}
          avatar={image?.url}
          condition={condition}
          originalPrice={originalPrice}
          // isLoggedIn={isLoggedIn}
          authorId={authorId}
          postStatus={status}
          id={id}
          company={company}
          postLocation={formattedLocation && formattedLocation.formattedAddress}
        />
      </a>
    );
  };

  return (
    <ListGrid
      data={recentPosts}
      columnWidth={[1]}
      postCount={postCount}
      totalPost={totalPost}
      limit={QUERY_VARIABLES.limit}
      component={renderRecentPost}
      loading={queryResult.loading ? queryResult.loading : loadingMore}
      placeholder={<PostLoader />}
      handleLoadMore={(loading) => {
        toggleLoading(true);
        paginate(page + 1);

        fetchMore({
          variables: {
            ...QUERY_VARIABLES,
            page: page + 1,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult || fetchMoreResult.posts.data.length === 0) {
              toggleLoading(false);
              return prev;
            }

            if (postCount && totalPost) {
              if (postCount <= totalPost) {
                console.log("prev.posts.data ->", prev.posts.data);
                console.log(
                  "fetchMoreResult.posts.data ->",
                  fetchMoreResult.posts.data
                );

                toggleLoading(false);

                const oldPosts = prev.category.posts.data;
                const newPosts = fetchMoreResult.category.posts.data;

                const concatedPosts = oldPosts.concat(newPosts);
                fetchMoreResult.posts.data = concatedPosts;
                return fetchMoreResult;
              }
            }
          },
        });
      }}
    />
  );
};

export default FeedCategoryPost;
