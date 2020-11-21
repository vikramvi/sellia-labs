import SinglePost from '../../containers/SinglePost';
import withLayout from '../../hoc/withLayout';
import { Modal } from '@redq/reuse-modal';
import PageMeta from '../../components/PageMeta';
import { useQuery } from '@apollo/react-hooks';
import { GET_POST } from 'core/graphql/Post.query';
import { useRouter } from 'next/router';
import { withApollo } from '../../helpers/apollo';
export default withApollo(
  withLayout(({ isLoggedIn, userId, location }) => {
    const {
      query: { slug },
    } = useRouter();

    let QUERY_VARIABLES = {
      lat: location && location.lat ? location.lat : null,
      lng: location && location.lng ? location.lng : null,
      LIMIT: 4,
      slug: slug,
    };

    const { data, loading, error } = useQuery(GET_POST, {
      variables: QUERY_VARIABLES,
    });
    if (error) return <p>{error.message}</p>;

    const title = data && data.post ? data.post.title : '';
    const content = data && data.post ? data.post.content : '';

    return (
      <>
        <PageMeta title={title} description={content} />
        <SinglePost
          data={data}
          loading={loading}
          userId={userId}
          isLoggedIn={isLoggedIn}
          error={error}
          QUERY_VARIABLES={QUERY_VARIABLES}
        />
        <Modal />
      </>
    );
  })
);
