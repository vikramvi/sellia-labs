import React from 'react';
import Link from 'next/link';
import { CURRENCY } from '../../../Config';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_POST } from 'core/graphql/AllPost.query';
import { RECENT_POST_PAGE, SINGLE_POST_PAGE } from 'core/navigation/constant';
import { PostLoader } from '../../../components/Placeholder';
import NavSidebar from '../../../components/NavSidebar';

import FeedPostCard from '../../../components/FeedPostCard';
import ListGrid from 'reusecore/src/elements/ListGrid';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import NoItemFound from '../../../components/NoItemFound';
import OnError from '../../../components/OnError';

export default function Feed({ userId, isLoggedIn }) {
  // QUERY SECTION
  let QUERY_VARIABLES = {
    LIMIT: 20,
  };

  console.log('feed user --', userId);

  const { data, loading, error } = useQuery(GET_ALL_POST, {
    variables: QUERY_VARIABLES,
  });

  // Error Rendering.
  if (error) return <OnError />;
  // Extract Post Data
  const recentPosts = data && data.posts ? data.posts.data : [];
  // Post Loop Control Area
  console.log('Recent Posts===>', recentPosts);
  const renderRecentPost = item => {
    const {
      title,
      slug,
      price,
      author: { name, image },
      content,
      createdAt: { seconds },
      image: { url, largeUrl },
      condition,
      originalPrice,
      authorId,
      status,
      id,
    } = item;
    return (
      // <Link
      //   href={`${SINGLE_POST_PAGE}/[slug]`}
      //   as={`${SINGLE_POST_PAGE}/${slug}`}
      // >
      <a>
        <FeedPostCard
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
          imageStyle={{
            marginRight: 20,
          }}
          currency={CURRENCY}
          title={title}
          price={price}
          imageSrc={[url, largeUrl]}
          author={name}
          userId={userId}
          createdAt={seconds}
          content={content}
          item={item}
          avatar={image?.url}
          condition={condition}
          originalPrice={originalPrice}
          isLoggedIn={isLoggedIn}
          authorId={authorId}
          postStatus={status}
          id={id}
        />
      </a>
      // </Link>
    );
  };

  return (
    <>
      <NavSidebar></NavSidebar>
      <Box mt={20} ml={'25%'} mr={'25%'}>
        {!recentPosts ? (
          <NoItemFound />
        ) : (
          <ListGrid
            data={recentPosts}
            columnWidth={[1]}
            limit={QUERY_VARIABLES.LIMIT}
            component={renderRecentPost}
            loading={loading}
            placeholder={<PostLoader />}
          />
        )}
        <Link href={RECENT_POST_PAGE}>
          <a>
            <Button
              title="See all"
              color="#8c8c8c"
              fontWeight={500}
              variant="textButton"
            />
          </a>
        </Link>
      </Box>
    </>
  );
}
