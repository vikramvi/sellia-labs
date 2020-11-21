import React, { useState } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

import { PostLoader } from '../../components/Placeholder';
import { Grid } from 'react-styled-flexboxgrid';
import { SINGLE_POST_PAGE } from 'core/navigation/constant';
import { useQuery } from '@apollo/react-hooks';
import { GET_PUBLISHED_POST } from 'core/graphql/Profile.query';
import { CURRENCY } from '../../Config';
import PostCard from '../../components/PostCard';
import ListGrid from 'reusecore/src/elements/ListGrid';
import NoItemFound from '../../components/NoItemFound';
import OnError from '../../components/OnError';

export default withRouter(function UserListingPost({
  router: {
    query: { username },
  },
}) {
  const [loadingMore, toggleLoading] = useState(false);
  const [page, paginate] = useState(1);
  // QUERY SECTION
  let QUERY_VARIABLES = {
    USERNAME: username,
    LIMIT: 12,
  };
  const { data, loading, error, fetchMore } = useQuery(GET_PUBLISHED_POST, {
    variables: QUERY_VARIABLES,
  });

  const userListingPosts =
    data && data.author && data.author.posts && data.author.posts.data
      ? data.author.posts.data
      : [];

  const publishedPostCount =
    data && data.author && data.author.posts ? data.author.posts.total : 0;

  const totalPost = publishedPostCount; // this line will be removed by GET ALL POST
  const postCount = userListingPosts.length;
  if (error) return <OnError />;

  return (
    <Grid style={{ paddingLeft: 15, paddingRight: 15 }}>
      {!loading && userListingPosts.length === 0 ? (
        <NoItemFound />
      ) : (
        <ListGrid
          data={userListingPosts}
          totalPost={totalPost}
          postCount={postCount}
          columnWidth={['100%', '50%', '33.33%', '25%']}
          component={item => {
            const postImg = item.image ? item.image.url : '';
            const postFallbackImage = item.image ? item.image.largeUrl : '';
            return (
              <Link href={`${SINGLE_POST_PAGE}/${item.slug}`}>
                <a>
                  <PostCard
                    currency={CURRENCY}
                    title={item.title}
                    price={item.price}
                    imageSrc={[postImg, postFallbackImage]}
                  />
                </a>
              </Link>
            );
          }}
          loading={loading ? loading : loadingMore}
          placeholder={<PostLoader />}
          limit={QUERY_VARIABLES.LIMIT}
          handleLoadMore={loading => {
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
                const oldPosts = prev.author.posts.data;
                const newPosts = fetchMoreResult.author.posts.data;
                if (postCount && totalPost) {
                  if (postCount <= totalPost) {
                    toggleLoading(false);
                    const concatedPosts = oldPosts.concat(newPosts);
                    fetchMoreResult.author.posts.data = concatedPosts;
                    return fetchMoreResult;
                  }
                }
              },
            });
          }}
        />
      )}
    </Grid>
  );
});
