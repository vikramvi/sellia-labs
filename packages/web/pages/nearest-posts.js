import { useState } from 'react';
import Link from 'next/link';
import { Grid } from 'react-styled-flexboxgrid';
import { useQuery } from '@apollo/react-hooks';
import { GET_NEAREST_POST } from 'core/graphql/NearestPost.query';
import { CURRENCY } from '../Config';
import { SINGLE_POST_PAGE } from 'core/navigation/constant';
import withLayout from '../hoc/withLayout';
import PageMeta from '../components/PageMeta';

import Heading from 'reusecore/src/elements/Heading';
import Box from 'reusecore/src/elements/Box';
import ListGrid from 'reusecore/src/elements/ListGrid';
import CardLoader from '../components/Loader/CardLoader';
import PostCard from '../components/PostCard';
import NoItemFound from '../components/NoItemFound';
import OnError from '../components/OnError';
import { withApollo } from '../helpers/apollo';
export default withApollo(
  withLayout(({ location }) => {
    const [loadingMore, toggleLoading] = useState(false);
    const [page, paginate] = useState(1);
    let QUERY_VARIABLES = {
      page: 1,
      LIMIT: 4,
      location,
    };
    const { data, loading, error, fetchMore } = useQuery(GET_NEAREST_POST, {
      variables: QUERY_VARIABLES,
    });

    if (error) return <OnError />;

    const postCount =
      data && data.nearest && data.nearest.data ? data.nearest.data.length : 1;
    const nearest =
      data && data.nearest && data.nearest.data ? data.nearest.data : [];
    const totalPost = data && data.nearest ? data.nearest.total : 1;

    const renderNearestPost = item => {
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
              content="Nearest Post"
              mb={40}
              style={{ fontSize: 24, fontWeight: 600, color: '#333333' }}
            />
            {!loading && !nearest.length ? (
              <NoItemFound />
            ) : (
              <ListGrid
                data={nearest}
                totalPost={totalPost}
                postCount={postCount}
                columnWidth={[1, 1 / 2, 1 / 4]}
                component={renderNearestPost}
                loading={loading ? loading : loadingMore}
                isLoading={loadingMore}
                placeholder={<CardLoader />}
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
                      if (postCount && totalPost) {
                        if (postCount <= totalPost) {
                          toggleLoading(false);
                          return Object.assign({}, prev, {
                            nearest: {
                              data: [
                                ...prev.nearest.data,
                                ...fetchMoreResult.nearest.data,
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
