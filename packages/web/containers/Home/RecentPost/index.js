import React from 'react';
import Link from 'next/link';
import { CURRENCY } from '../../../Config';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_POST } from 'core/graphql/AllPost.query';
import { RECENT_POST_PAGE, SINGLE_POST_PAGE } from 'core/navigation/constant';
import { PostLoader } from '../../../components/Placeholder';

import PostCard from '../../../components/PostCard';
import ListGrid from 'reusecore/src/elements/ListGrid';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Button from 'reusecore/src/elements/Button';
import NoItemFound from '../../../components/NoItemFound';
import OnError from '../../../components/OnError';

export default function RecentPost() {
  // QUERY SECTION
  let QUERY_VARIABLES = {
    LIMIT: 8,
  };

  const { data, loading, error } = useQuery(GET_ALL_POST, {
    variables: QUERY_VARIABLES,
  });

  // Error Rendering.
  if (error) return <OnError />;
  // Extract Post Data
  const recentPosts = data && data.posts ? data.posts.data : [];
  // Post Loop Control Area

  const renderRecentPost = item => {
    const {
      title,
      slug,
      price,
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
    <>
      <Box flexBox justifyContent="space-between" alignItems="center">
        <Heading
          content="Recently Uploaded"
          mb={0}
          fontSize={20}
          fontWeight={600}
        />
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
      <Box mt={20}>
        {!recentPosts ? (
          <NoItemFound />
        ) : (
          <ListGrid
            data={recentPosts}
            columnWidth={[1, 1 / 2, 1 / 3, 1 / 4]}
            limit={QUERY_VARIABLES.LIMIT}
            component={renderRecentPost}
            loading={loading}
            placeholder={<PostLoader />}
          />
        )}
      </Box>
    </>
  );
}
