import React, { Fragment, useContext, useState } from "react";
import Link from "next/link";
import ListView from "../../../components/ListView";
import { ListLoader } from "../../../components/Placeholder";
import { useQuery } from "@apollo/react-hooks";
import { GET_SEARCH_POST } from "core/graphql/Search.query";
import { CURRENCY } from "../../../Config";
import { SINGLE_POST_PAGE } from "core/navigation/constant";
import { SearchContext } from "../../../contexts/SearchContext";
import { getUrlToState, setStateToUrl } from "../../../helpers/urlHandler";
import PlaceholderImg from "core/static/images/thumb-grid-placeholder.svg";
import ListGrid from "reusecore/src/elements/ListGrid";
import NoItemFound from "../../../components/NoItemFound";
import OnError from "../../../components/OnError";

const timeFormatAMPM = (date) => {
  return date.toLocaleString("en-US", { timeStyle: "short" });
};

const dateFormatAMPM = (date) => {
  return date.toLocaleString("en-US", { dateStyle: "medium" });
};

const SearchPostItem = (props) => {
  let publishTime = "";
  const urlState = getUrlToState();
  const { state, dispatch } = useContext(SearchContext);
  const [loadingMore, toggleLoading] = useState(false);

  console.log("urlState ->", urlState);

  const { data, loading, error, fetchMore } = useQuery(GET_SEARCH_POST, {
    variables: {
      queryVariables: urlState,
    },
  });
  if (error) return <OnError />;

  let searchPosts =
    data && data.searchPosts && data.searchPosts.data
      ? data.searchPosts.data
      : [];
  const postCount = searchPosts ? searchPosts.length : 1;
  const totalPost =
    data && data.searchPosts && data.searchPosts.total
      ? data.searchPosts.total
      : 1;
  const searchPostsData = searchPosts.map((post) => {
    console.log("Search result ->", post);

    let createdTime = "";

    if (post.createdAt) {
      if (post.createdAt.seconds) {
        createdTime = new Date(post.createdAt.seconds * 1000);
      } else if (post.createdAt._seconds) {
        createdTime = new Date(post.createdAt._seconds * 1000);
      }

      var today = new Date().setHours(0, 0, 0, 0);
      var thatDay = new Date(createdTime).setHours(0, 0, 0, 0);

      if (today === thatDay) {
        publishTime = "Today " + timeFormatAMPM(createdTime);
      } else {
        publishTime = `${dateFormatAMPM(createdTime)}`;
      }

      return {
        ...post,
        publishTime,
      };
    } else {
      return {
        ...post,
      };
    }
  });
  return (
    <Fragment>
      {searchPostsData.length === 0 && !loading ? (
        <NoItemFound />
      ) : (
        process.browser && (
          <ListGrid
            data={searchPostsData}
            totalPost={totalPost}
            postCount={postCount}
            columnWidth={[1]}
            componentContainerStyle={{
              p: 0,
              borderBottom: "1px solid #eeeeee",
            }}
            componentWrapperStyle={{
              margin: 0,
            }}
            component={(item) => {
              return (
                <Link href={`${SINGLE_POST_PAGE}/${item.slug}`}>
                  <a>
                    <ListView
                      currency={CURRENCY}
                      title={item.title}
                      price={item.price}
                      source={item.image ? item.image.url : PlaceholderImg}
                      fallbackSource={
                        item.image ? item.image.largeUrl : PlaceholderImg
                      }
                      negotiable={item.isNegotiable}
                      condition={item.condition}
                      location={
                        item &&
                        item.formattedLocation &&
                        item.formattedLocation.formattedAddress !== null
                          ? item.formattedLocation.formattedAddress
                          : "Location goes here"
                      }
                      distance={
                        item.distance !== null && item.distance !== undefined
                          ? `Approximately ${Math.floor(item.distance)} km away`
                          : ""
                      }
                      icon="md-pin"
                      postedBy={{ ...item.author, authorId: item.authorId }}
                      postedTime={item.publishTime}
                      userId={props.userId}
                    />
                  </a>
                </Link>
              );
            }}
            loading={loading ? loading : loadingMore}
            loaderColor="#ffffff"
            placeholder={<ListLoader />}
            limit={state.LIMIT}
            handleLoadMore={(loading) => {
              toggleLoading(true);
              setStateToUrl({ page: state.page + 1 });
              fetchMore({
                variables: {
                  queryVariables: { ...urlState, page: state.page + 1 },
                },
                updateQuery: (prev, { fetchMoreResult }) => {
                  if (!fetchMoreResult) {
                    toggleLoading(false);
                    return prev;
                  }
                  if (postCount && totalPost) {
                    if (postCount <= totalPost) {
                      toggleLoading(false);
                      dispatch({
                        type: "UPDATE",
                        payload: { ...state, page: state.page + 1 },
                      });
                      return {
                        searchPosts: {
                          data: [
                            ...prev.searchPosts.data,
                            ...fetchMoreResult.searchPosts.data,
                          ],
                          total: totalPost,
                        },
                      };
                    }
                  }
                },
              });
            }}
          />
        )
      )}
    </Fragment>
  );
};

const SearchPost = (props) => {
  return (
    <Fragment>
      <SearchPostItem {...props} />
    </Fragment>
  );
};

export default SearchPost;
