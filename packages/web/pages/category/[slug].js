import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Grid } from 'react-styled-flexboxgrid';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORY_POST } from 'core/graphql/CategoryPost.query';
import { CURRENCY } from '../../Config';
import { SINGLE_POST_PAGE } from 'core/navigation/constant';
import withLayout from '../../hoc/withLayout';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import ListGrid from 'reusecore/src/elements/ListGrid';
import CardLoader from '../../components/Loader/CardLoader';
import PostCard from '../../components/PostCard';
import NoItemFound from '../../components/NoItemFound';
import OnError from '../../components/OnError';
import PageMeta from '../../components/PageMeta';
import { withApollo } from '../../helpers/apollo';
const SingleCategory = ({ data, loading, fetchMore, limit }) => {
  const [loadingMore, toggleLoading] = useState(false);
  const [page, paginate] = useState(1);
  const fetchedCategoryPost =
    data && data.category ? data.category.posts.data : [];
  const postCount = fetchedCategoryPost.length;
  const totalPost = data && data.category ? data.category.posts.total : null;
  const categoryName = data && data.category ? data.category.name : null;

  const renderCategoryPost = item => {
    const {
      title,
      price = `0.00`,
      slug,
      image: { url, largeUrl },
    } = item;
    return (
      <Link
        href={`${SINGLE_POST_PAGE}/[slug]`}
        as={`${SINGLE_POST_PAGE}/${slug}`}
      >
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
    <Box mt={50} mb={50}>
      <Grid>
        <Heading
          content={categoryName}
          mb={40}
          style={{ fontSize: 24, fontWeight: 600, color: '#333333' }}
        />
        {!fetchedCategoryPost ? (
          <NoItemFound />
        ) : (
          <ListGrid
            data={fetchedCategoryPost}
            totalPost={totalPost}
            postCount={postCount}
            columnWidth={[1, 1 / 2, 1 / 4]}
            component={renderCategoryPost}
            loading={loading ? loading : loadingMore}
            isLoading={loadingMore}
            placeholder={<CardLoader />}
            limit={limit}
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
                  const oldPosts = prev.category.posts.data;
                  const newPosts = fetchMoreResult.category.posts.data;
                  if (postCount && totalPost) {
                    if (postCount <= totalPost) {
                      toggleLoading(false);
                      const concatedPosts = oldPosts.concat(newPosts);
                      fetchMoreResult.category.posts.data = concatedPosts;
                      return fetchMoreResult;
                    }
                  }
                },
              });
            }}
          />
        )}
      </Grid>
    </Box>
  );
};

export default withApollo(
  withLayout(() => {
    const {
      query: { slug },
    } = useRouter();
    let QUERY_VARIABLES = {
      SLUG: slug,
      LIMIT: 20,
    };
    const { data, loading, error, fetchMore } = useQuery(GET_CATEGORY_POST, {
      variables: QUERY_VARIABLES,
    });

    if (error) return <OnError />;

    const { name } = data && data.category ? data.category : '';
    return (
      <Fragment>
        <PageMeta title={name} description="Product categories" />
        <SingleCategory
          data={data}
          loading={loading}
          fetchMore={fetchMore}
          limit={QUERY_VARIABLES.LIMIT}
        />
      </Fragment>
    );
  })
);
