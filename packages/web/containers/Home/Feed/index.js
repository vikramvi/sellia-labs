import React, { Fragment, useContext, useState, useEffect } from "react";

import Link from "next/link";
import { useQuery } from "@apollo/react-hooks";
import { GET_POST } from "core/graphql/Post.query";
import { getUrlToState, setStateToUrl } from "../../../helpers/urlHandler";

import { RECENT_POST_PAGE, SINGLE_POST_PAGE } from "core/navigation/constant";
import { PostLoader } from "../../../components/Placeholder";
import NavSidebar from "../../../components/NavSidebar";

import ListGrid from "reusecore/src/elements/ListGrid";
import Box from "reusecore/src/elements/Box";
import Heading from "reusecore/src/elements/Heading";
import Button from "reusecore/src/elements/Button";
import NoItemFound from "../../../components/NoItemFound";
import OnError from "../../../components/OnError";
import { FeedContext } from "../../../contexts/FeedContext";
import { GET_CATEGORY_POST } from "core/graphql/CategoryPost.query";
import "./style.css";
import Img from "react-image";
import profileImg from "core/static/images/user-placeholder.svg";
import { openModal, closeModal } from "@redq/reuse-modal";
import { useRouter } from "next/router";
import AddPostModal from "../../ModalContainer/AddPostModal";
import { GET_AUTHOR } from "core/graphql/Author";

import FeedAllPost from "./FeedAllPost";

export default function Feed({ userId, isLoggedIn, location, loginUser }) {
  const {
    query: { slug },
  } = useRouter();

  console.log("feed slug ->", slug);

  const { state, dispatch } = useContext(FeedContext);
  const { feedFilter } = state;

  console.log("feedFilter.categorySlug --", feedFilter.categorySlug);

  const [loadingMore, toggleLoading] = useState(false);

  let recentPosts;
  let queryResult;
  let QUERY_VARIABLES;
  let totalPost;

  if (slug) {
    QUERY_VARIABLES = {
      lat: location && location.lat ? location.lat : null,
      lng: location && location.lng ? location.lng : null,
      LIMIT: state.limit,
      slug: slug,
      page: state.page,
    };

    queryResult = useQuery(GET_POST, {
      variables: QUERY_VARIABLES,
    });
    const { data, loading, error } = queryResult;

    recentPosts = data && data.post ? [data.post] : [];

    if (error) return <p>{error.message}</p>;
  } else if (!feedFilter.categorySlug || feedFilter.categorySlug == "") {
    return <FeedAllPost userId={userId} />;
  } else {
    QUERY_VARIABLES = {
      SLUG: feedFilter.categorySlug,
      LIMIT: state.limit,
      page: state.page,
    };
    queryResult = useQuery(GET_CATEGORY_POST, {
      variables: QUERY_VARIABLES,
    });
    // Extract Post Data
    const { data, loading, error } = queryResult;
    recentPosts =
      data && data.category && data.category.posts.data
        ? data.category.posts.data
        : [];
    // Error Rendering.
    if (error) return <OnError />;
  }

  const [page, paginate] = useState(1);

  const { data, loading, error } = queryResult;

  console.log("Feed data Posts===>", data);

  recentPosts = data && data.posts ? data.posts.data : [];
  totalPost = data && data.posts ? data.posts.total : 1;

  // Error Rendering.
  if (error) return <OnError />;

  const postCount = recentPosts ? recentPosts.length : 1;

  const { fetchMore } = queryResult;

  // Post Loop Control Area
  console.log("Recent Posts===>", recentPosts);

  console.log("fetchMore ->", fetchMore);

  console.log("postCount ->", postCount);
  console.log("totalPost ->", totalPost);

  const handleAddPost = () => {
    openModal({
      overlayClassName: "customeOverlayClass",
      closeOnClickOutside: false,
      closeComponent: () => <></>,
      componentProps: {
        data: {
          closeModal,
          userId,
        },
      },
      config: {
        className: "addPostNewModal",
        height: "auto",
        width: "50%",
        transition: {
          tension: 150,
        },
      },
      component: AddPostModal,
    });
  };

  return (
    <Box mt={0} ml={"25%"} mr={"25%"}>
      <NavSidebar></NavSidebar>
      <Box>
        <div className="css-1dkvlfs">
          <Box
            mb={15}
            aria-live="off"
            id="main_content"
            className="_19x6ASDS _1eW-tOzA"
            onClick={handleAddPost}
          >
            <span className="_1EhANPqp">
              <div className="avatar">
                <Img
                  src={profileImg}
                  style={{ width: 35, height: 35, borderRadius: "50%" }}
                  loader={<img src={profileImg} alt="profile picture" />}
                  unloader={<img src={profileImg} alt="profile picture" />}
                />
              </div>
            </span>
            <div className="_3zGsrPl_ _2wCEotpQ">
              <div className="_1IukxMPo _2YwTbt9g _1uAKrEJw">
                <span>
                  Post a <span className="prompt-bold">message</span>,{" "}
                  <span className="prompt-bold">listing</span> to your
                  neighborhood
                </span>
              </div>
            </div>
          </Box>
        </div>
        {!recentPosts ? (
          <NoItemFound />
        ) : (
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
                  if (
                    !fetchMoreResult ||
                    fetchMoreResult.posts.data.length === 0
                  ) {
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
        )}
        {/* <Link href={RECENT_POST_PAGE}>
          <a>
            <Button
              title="See all"
              color="#8c8c8c"
              fontWeight={500}
              variant="textButton"
            />
          </a>
        </Link> */}
      </Box>
    </Box>
  );
}
