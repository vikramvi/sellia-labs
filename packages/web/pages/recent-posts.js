import { useState } from 'react';
import Link from 'next/link';
import { Grid } from 'react-styled-flexboxgrid';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_POST } from 'core/graphql/AllPost.query';
import { CURRENCY } from '../Config';
import { SINGLE_POST_PAGE } from 'core/navigation/constant';
import withLayout from '../hoc/withLayout';
import Heading from 'reusecore/src/elements/Heading';
import Box from 'reusecore/src/elements/Box';
import ListGrid from 'reusecore/src/elements/ListGrid';
import CardLoader from '../components/Loader/CardLoader';
import PostCard from '../components/PostCard';
import NoItemFound from '../components/NoItemFound';
import OnError from '../components/OnError';
import PageMeta from '../components/PageMeta';
import { withApollo } from '../helpers/apollo';
export default withApollo(
  withLayout(() => {
    const [loadingMore, toggleLoading] = useState(false);
    const [page, paginate] = useState(1);
    const QUERY_VARIABLES = {
      LIMIT: 20,
    };
    const { data, loading, error, fetchMore } = useQuery(GET_ALL_POST, {
      variables: QUERY_VARIABLES,
    });

    if (error) return <OnError />;

    const postCount =
      data && data.posts && data.posts.data ? data.posts.data.length : 1;
    const posts = data && data.posts && data.posts.data ? data.posts.data : [];
    const totalPost = data && data.posts ? data.posts.total : 1;
    const renderRecentPost = item => {
      const {
        title,
        slug,
        price = 0.0,
        image: { url, largeUrl },
      } = item;
      return (
        <Link href={`${SINGLE_POST_PAGE}/${slug}`}>
          <a>
            <PostCard
              currency={CURRENCY}
              title={title}
              price={price}
              imageSrc={[url, largeUrl]}
            />
          </a>
        </Link>
      );
    };
    return (
      <>
        <PageMeta title="Recent Post" description="Recent Post" />
        <Box mt={50} mb={50}>
          <Grid>
            <Heading
              content="Recent Posts"
              mb={40}
              style={{ fontSize: 24, fontWeight: 600, color: '#333333' }}
            />
            {!loading && !posts.length ? (
              <NoItemFound />
            ) : (
              <ListGrid
                data={posts}
                totalPost={totalPost}
                postCount={postCount}
                columnWidth={[1, 1 / 2, 1 / 4]}
                component={renderRecentPost}
                loading={loading ? loading : loadingMore}
                loaderColor="#ffffff"
                placeholder={<CardLoader />}
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
          </Grid>
        </Box>
      </>
    );
  })
);
