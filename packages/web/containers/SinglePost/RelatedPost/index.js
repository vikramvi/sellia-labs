import Link from 'next/link';
import { CURRENCY } from '../../../Config';
import { SINGLE_POST_PAGE } from 'core/navigation/constant';
import CardLoader from '../../../components/Loader/CardLoader';
import ListGrid from 'reusecore/src/elements/ListGrid';
import Box from 'reusecore/src/elements/Box';
import PostCard from '../../../components/PostCard';

const RelatedPost = props => {
  const relatedItem = props.related ? props.related : [];
  const renderRelatedPost = item => {
    const postImg = item.image ? item.image.url : '';
    const postFallbackImg = item.image ? item.image.largeUrl : '';
    const title = item.title ? item.title : '';
    const price = item.price ? item.price : '';

    return (
      <Link
        href={`${SINGLE_POST_PAGE}/[slug]`}
        as={`${SINGLE_POST_PAGE}/${item.slug}`}
      >
        <a>
          <PostCard
            currency={CURRENCY}
            title={title}
            price={price}
            imageSrc={[postImg, postFallbackImg]}
          />
        </a>
      </Link>
    );
  };

  return (
    <Box mt={30} width={1}>
      <ListGrid
        data={relatedItem}
        columnWidth={[1, 1 / 2, 1 / 3, 1 / 4]}
        limit={props.limit}
        component={renderRelatedPost}
        loading={props.loading}
        placeholder={<CardLoader />}
      />
    </Box>
  );
};

export default RelatedPost;
