import React, { Fragment, useState, useContext } from 'react';
import { CategoryListCard } from '../../../components/CategoryCard';
import { CategoryLoader } from '../../../components/Placeholder';
import { useQuery } from '@apollo/react-hooks';
import { GET_SEARCH_CATEGORY } from 'core/graphql/Search.query';
import { SearchContext } from '../../../contexts/SearchContext';
import { addOrRemove, inArray } from '../../../helpers';
import { setStateToUrl, getUrlToState } from '../../../helpers/urlHandler';
import ListGrid from 'reusecore/src/elements/ListGrid';
import OnError from '../../../components/OnError';

function SearchCategory() {
  const urlState = getUrlToState();
  const [loadingMore, toggleLoading] = useState(false);
  const [page, paginate] = useState(1);
  const { state, dispatch } = useContext(SearchContext);
  let QUERY_VARIABLES = {
    LIMIT: 6,
  };

  const { data, loading, error, fetchMore } = useQuery(GET_SEARCH_CATEGORY, {
    variables: QUERY_VARIABLES,
  });
  if (error) return <OnError />;
  // if (loading) return null;
  const allCategories =
    data && data.categories && data.categories.data ? data.categories.data : [];
  const categoryCount =
    data && data.categories && data.categories.length
      ? data.categories.length
      : 1;
  const total =
    data && data.categories && data.categories.total
      ? data.categories.total
      : 1;

  const handleCategorySelection = async slug => {
    const selectedCategories = await addOrRemove(slug, state.categories);
    setStateToUrl({
      categories: selectedCategories,
    });

    dispatch({
      type: 'UPDATE',
      payload: {
        categories: selectedCategories,
      },
    });
  };
  return (
    <Fragment>
      <ListGrid
        data={allCategories}
        totalPost={total}
        postCount={allCategories.length}
        columnWidth={[1]}
        component={item => {
          return (
            <CategoryListCard
              title={item.name}
              selected={inArray(item.slug, urlState.categories)}
              postNumber={`${item.posts.total} posts`}
              source={item.image ? item.image.url : ''}
              style={{ paddingLeft: 30, paddingRight: 20 }}
              handleClick={() => handleCategorySelection(item.slug)}
            />
          );
        }}
        loading={loading ? loading : loadingMore}
        buttonVariant="textButton"
        loadMoreButtonStyle={{
          color: '#595959',
          textDecoration: 'none !important',
        }}
        placeholder={<CategoryLoader />}
        limit={QUERY_VARIABLES.LIMIT}
        componentWrapperStyle={{
          ml: 0,
          mr: 0,
          mb: 20,
        }}
        componentContainerStyle={{
          pl: 0,
          pr: 0,
        }}
        loadMoreWrapperStyle={{
          width: '100%',
          flexBox: true,
          flexDirection: 'row',
          justifyContent: 'center',
          pt: '5px',
          pb: '5px',
          borderTop: '1px solid #e2e2e2',
        }}
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
              const oldPosts = prev.categories.data;
              const newPosts = fetchMoreResult.categories.data;
              console.log('before everything');
              if (categoryCount && total) {
                console.log('called');
                if (categoryCount <= total) {
                  console.log('called 1');
                  toggleLoading(false);
                  const concatedPosts = oldPosts.concat(newPosts);
                  fetchMoreResult.categories.data = concatedPosts;
                  return fetchMoreResult;
                }
              }
            },
          });
        }}
      />
    </Fragment>
  );
}

export default SearchCategory;
