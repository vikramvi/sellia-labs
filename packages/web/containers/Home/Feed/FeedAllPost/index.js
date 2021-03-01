import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POST } from "core/graphql/AllPost.query";
import ListGrid from "reusecore/src/elements/ListGrid";
import { PostLoader } from "../../../../components/Placeholder";
import FeedPostCard from "../../../../components/FeedPostCard";
import { CURRENCY } from "../../../../Config";

import NoItemFound from "../../../../components/NoItemFound";

const FeedAllPost = ({ userId }) => {
  const [loadingMore, toggleLoading] = useState(false);
  const [page, paginate] = useState(1);
  const QUERY_VARIABLES = {
    LIMIT: 4,
  };
  const { data, loading, error, fetchMore } = useQuery(GET_ALL_POST, {
    variables: QUERY_VARIABLES,
  });

  if (error) return <OnError />;

  const postCount =
    data && data.posts && data.posts.data ? data.posts.data.length : 1;
  const posts = data && data.posts && data.posts.data ? data.posts.data : [];
  const totalPost = data && data.posts ? data.posts.total : 1;

  console.log("FeedAllPost===>", data);

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
          item={item}
          currency={CURRENCY}
          title={title}
          price={price}
          imageSrc={[url, largeUrl]}
          postGallery={gallery}
          author={name}
          userId={userId}
          createdAt={seconds}
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
    <>
      {!loading && !posts.length ? (
        <NoItemFound />
      ) : (
        <ListGrid
          data={posts}
          totalPost={totalPost}
          postCount={postCount}
          columnWidth={[1]}
          component={renderRecentPost}
          loading={loading ? loading : loadingMore}
          loaderColor="#ffffff"
          placeholder={<PostLoader />}
          limit={QUERY_VARIABLES.LIMIT}
          handleLoadMore={() => {
            toggleLoading(true);
            paginate(page + 1);
            fetchMore({
              variables: {
                page: page + 1,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                  toggleLoading(false);
                  return prev;
                }
                if (postCount && totalPost) {
                  if (postCount <= totalPost) {
                    console.log("prev.recent.data ->", prev.posts.data);
                    console.log(
                      "fetchMoreResult.recent.data ->",
                      fetchMoreResult.posts.data
                    );

                    toggleLoading(false);
                    return Object.assign({}, prev, {
                      posts: {
                        data: [
                          ...prev.posts.data,
                          ...fetchMoreResult.posts.data,
                        ],
                        total: totalPost,
                      },
                    });
                  }
                }
              },
            });
          }}
        />
      )}
    </>
  );
};

export default FeedAllPost;
