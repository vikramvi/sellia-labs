import React, { useState } from "react";
import Link from "next/link";
import { PostLoader } from "../../components/Placeholder";
import { Grid } from "react-styled-flexboxgrid";
import { SINGLE_POST_PAGE } from "core/navigation/constant";
import { useQuery } from "@apollo/react-hooks";
import { GET_FAVOURITE_POST } from "core/graphql/Profile.query";
import { CURRENCY } from "../../Config";
import { withRouter } from "next/router";
import PostCard from "../../components/PostCard";
import ListGrid from "reusecore/src/elements/ListGrid";
import NoItemFound from "../../components/NoItemFound";
import OnError from "../../components/OnError";
import FeedPostCard from "../../components/FeedPostCard";

export default withRouter(function FavouritePost({
  router: {
    query: { username },
  },
  userId,
}) {
  const [loadingMore, toggleLoading] = useState(false);
  const [page, paginate] = useState(1);
  // QUERY SECTION
  let QUERY_VARIABLES;
  QUERY_VARIABLES = {
    USERNAME: username,
    LIMIT: 12,
  };
  const { data, loading, error, fetchMore } = useQuery(GET_FAVOURITE_POST, {
    variables: QUERY_VARIABLES,
  });

  const favouritePosts =
    data && data.author && data.author.favourite && data.author.favourite.data
      ? data.author.favourite.data
      : [];

  const favouritePostCount =
    data && data.author && data.author.favourite
      ? data.author.favourite.total
      : 0;

  const totalPost = favouritePostCount; // this line will be removed by GET ALL POST
  const postCount = favouritePosts.length;
  if (error) return <OnError />;

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

      formattedLocation,
      id,
    } = item;

    const { company, name, image } = item.author || {};
    const { seconds } = item.createdAt || {};
    const { url, largeUrl } = item.image || {};

    return (
      // <Link
      //   href={`${SINGLE_POST_PAGE}/[slug]`}
      //   as={`${SINGLE_POST_PAGE}/${slug}`}
      // >
      <>
        <a>
          <FeedPostCard
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "flex-start",
            }}
            imageStyle={{
              marginRight: 20,
            }}
            currency={CURRENCY}
            title={title}
            price={price}
            imageSrc={[url, largeUrl]}
            author={name}
            userId={userId ?? ""}
            createdAt={seconds}
            content={content}
            item={item}
            avatar={image?.url}
            condition={condition}
            originalPrice={originalPrice}
            authorId={authorId}
            postStatus={status}
            id={id}
            company={company}
            postLocation={
              formattedLocation && formattedLocation.formattedAddress
            }
          />
        </a>
      </>
    );
  };

  // Post Loop Control Area
  return (
    <Grid style={{ paddingLeft: 15, paddingRight: 15 }}>
      {!loading && favouritePosts.length === 0 ? (
        <NoItemFound />
      ) : (
        <ListGrid
          data={favouritePosts}
          columnWidth={[1]}
          limit={QUERY_VARIABLES.LIMIT}
          component={renderRecentPost}
          loading={loading ? loading : loadingMore}
          placeholder={<PostLoader />}
        />

        // <ListGrid
        //   data={favouritePosts}
        //   totalPost={totalPost}
        //   postCount={postCount}
        //   columnWidth={["100%", "50%", "33.33%", "25%"]}
        //   component={(item) => {
        //     const postImg = item.image ? item.image.url : "";
        //     const postFallbackImage = item.image ? item.image.largeUrl : "";
        //     return (
        //       <Link href={`${SINGLE_POST_PAGE}/${item.slug}`}>
        //         <a>
        //           <PostCard
        //             currency={CURRENCY}
        //             title={item.title}
        //             price={item.price}
        //             imageSrc={[postImg, postFallbackImage]}
        //           />
        //         </a>
        //       </Link>
        //     );
        //   }}
        //   loading={loading ? loading : loadingMore}
        //   placeholder={<PostLoader />}
        //   limit={QUERY_VARIABLES.LIMIT}
        //   handleLoadMore={(loading) => {
        //     toggleLoading(true);
        //     paginate(page + 1);
        //     fetchMore({
        //       variables: {
        //         page: page + 1,
        //       },
        //       updateQuery: (prev, { fetchMoreResult }) => {
        //         if (!fetchMoreResult) {
        //           toggleLoading(false);
        //           return prev;
        //         }
        //         const oldPosts = prev.author.favourite.data;
        //         const newPosts = fetchMoreResult.author.favourite.data;
        //         if (postCount && totalPost) {
        //           if (postCount <= totalPost) {
        //             toggleLoading(false);
        //             const concatedPosts = oldPosts.concat(newPosts);
        //             fetchMoreResult.author.favourite.data = concatedPosts;
        //             return fetchMoreResult;
        //           }
        //         }
        //       },
        //     });
        //   }}
        // />
      )}
    </Grid>
  );
});
