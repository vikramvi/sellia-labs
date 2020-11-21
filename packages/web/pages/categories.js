import { useState } from 'react';
import Link from 'next/link';
import { Grid } from 'react-styled-flexboxgrid';
import { useQuery } from '@apollo/react-hooks';
import { GET_CATEGORIES } from 'core/graphql/Category.query';
import { SINGLE_CATEGORY_PAGE } from 'core/navigation/constant';
import withLayout from '../hoc/withLayout';
import { CategoryGridCard } from '../components/CategoryCard';
import Box from 'reusecore/src/elements/Box';
import ListGrid from 'reusecore/src/elements/ListGrid';
import CategoryLoader from '../components/Loader/CategoryLoader';
import PageMeta from '../components/PageMeta';

import Heading from 'reusecore/src/elements/Heading';
import NoItemFound from '../components/NoItemFound';
import OnError from '../components/OnError';
import { withApollo } from '../helpers/apollo';
export default withApollo(
  withLayout(() => {
    const [loadingMore, toggleLoading] = useState(false);
    const [page, paginate] = useState(1);
    let QUERY_VARIABLES = {
      LIMIT: 20,
    };
    const { data, loading, error, fetchMore } = useQuery(GET_CATEGORIES, {
      variables: QUERY_VARIABLES,
    });
    if (error) return <OnError />;

    const categoryCount =
      data && data.categories && data.categories.data
        ? data.categories.data.length
        : 1;
    const categories =
      data && data.categories && data.categories.data
        ? data.categories.data
        : [];
    const totalCategory = data && data.categories ? data.categories.total : 1;
    const renderCategoryItem = item => {
      const {
        slug,
        image: { url },
        name,
        posts,
      } = item;
      const postNumber = posts ? posts.total : '';
      return (
        <Link
          href={`${SINGLE_CATEGORY_PAGE}/[slug]`}
          as={`${SINGLE_CATEGORY_PAGE}/${slug}`}
        >
          <a>
            <CategoryGridCard
              imageSrc={url}
              title={name}
              postNumber={`${postNumber} post`}
              height="auto"
              mb="2rem"
              boxShadow="1px 3px 15px rgba(0, 0, 0, 0.05)"
              border="none"
            />
          </a>
        </Link>
      );
    };

    return (
      <>
        <PageMeta title="Categories" description="Categories" />
        <Box pt={70} pb={70}>
          <Grid>
            <Heading
              content="Categories"
              mb={40}
              style={{ fontSize: 24, fontWeight: 600, color: '#333333' }}
            />
            {!categories.length && !loading ? (
              <NoItemFound />
            ) : (
              <ListGrid
                data={categories}
                totalPost={totalCategory}
                postCount={categoryCount}
                columnWidth={[1, 1 / 2, 1 / 4]}
                component={renderCategoryItem}
                loading={loading ? loading : loadingMore}
                placeholder={<CategoryLoader />}
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
                      if (categoryCount && totalCategory) {
                        if (categoryCount <= totalCategory) {
                          toggleLoading(false);
                          return Object.assign({}, prev, {
                            categories: {
                              data: [
                                ...prev.categories.data,
                                ...fetchMoreResult.categories.data,
                              ],
                              total: totalCategory,
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
