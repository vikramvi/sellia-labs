import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_POST } from "core/graphql/AllPost.query";
import ListGrid from "reusecore/src/elements/ListGrid";

const FeedAllPost = () => {
  const [page, paginate] = useState(1);

  // QUERY SECTION
  const QUERY_VARIABLES = {
    LIMIT: 12,
    page: page,
  };
  const queryResult = useQuery(GET_ALL_POST, {
    variables: QUERY_VARIABLES,
  });

  const { data, loading, error } = queryResult;

  console.log("FeedAllPost===>", data);

  const recentPosts = data && data.posts ? data.posts.data : [];
  const postCount = recentPosts ? recentPosts.length : 1;
  const totalPost = data && data.posts ? data.posts.total : 1;

  // Error Rendering.
  if (error) return <OnError />;

  return (
    <ListGrid
      data={recentPosts}
      columnWidth={[1]}
      postCount={postCount}
      totalPost={totalPost}
      limit={state.limit}
      component={renderRecentPost}
      loading={queryResult.loading ? queryResult.loading : loadingMore}
      placeholder={<PostLoader />}
      handleLoadMore={(loading) => {
        toggleLoading(true);
        paginate(page + 1);
        // dispatch({
        //   type: "UPDATE_PAGE",
        //   payload: { ...state, page: state.page + 1 },
        // });
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

                const oldPosts = prev.posts.data;
                const newPosts = fetchMoreResult.posts.data;

                const concatedPosts = oldPosts.concat(newPosts);
                fetchMoreResult.posts.data = concatedPosts;
                return fetchMoreResult;

                // return {
                //   posts: {
                //     data: prev.posts.data.concat(
                //       fetchMoreResult.posts.data
                //     ),
                //     total: totalPost,
                //   },
                // };

                // return {
                //   posts: {
                //     data: [
                //       ...prev.posts.data,
                //       ...fetchMoreResult.posts.data,
                //     ],
                //     total: totalPost,
                //   },
                // };
              }
            }
          },
        });
      }}
    />
  );
};

export default FeedAllPost;
