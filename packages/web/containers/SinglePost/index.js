import React, { Fragment } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Description from './Description';
import RelatedPost from './RelatedPost';

import {
  SinglePageDescriptionLoader,
  SliderLoader,
} from '../../components/Loader';
import { Carousel, SectionWrapper } from './singlePost.style';

const SinglePost = ({
  data,
  loading,
  error,
  isLoggedIn,
  userId,
  location,
  QUERY_VARIABLES,
}) => {
  const post = data && data.post ? data.post : {};
  if (error) return <p>{`Error! ${error.message}`}</p>;
  const Loader = () => (
    <Row>
      <Col sm={8}>
        <SliderLoader />
      </Col>
      <Col sm={4}>
        <SinglePageDescriptionLoader />
      </Col>
    </Row>
  );

  const postImage =
    !loading && post && (post.image && post.image.largeUrl !== null)
      ? post.image.largeUrl
      : '';
  let postGallery = !loading && post && post.gallery ? post.gallery : [];

  return (
    <SectionWrapper>
      <Grid>
        {loading ? (
          <Loader />
        ) : (
          <Row>
            <Col
              sm={7}
              md={8}
              xs={12}
              style={{
                paddingLeft: 15,
                paddingRight: 15,
                marginBottom: 30,
              }}
            >
              {!postGallery.length && postImage ? (
                <img
                  src={postImage}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '3px',
                  }}
                />
              ) : (
                <Carousel showIndicators={false}>
                  {postGallery.map((image, index) => (
                    <div key={index} style={{ height: 'auto' }}>
                      <img
                        src={image.largeUrl}
                        style={{
                          maxWidth: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              )}
            </Col>
            <Col
              sm={5}
              md={4}
              xs={12}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <Description
                loading={loading}
                postData={post}
                isLoggedIn={isLoggedIn}
                userId={userId}
              />
            </Col>
          </Row>
        )}

        <Row style={{ margin: 0 }}>
          <Box
            mt={50}
            flexBox={true}
            justifyContent="space-between"
            style={{ width: '100%' }}
          >
            {post.related && post.related.length ? (
              <Text
                content="Related Ads"
                as="span"
                fontSize={18}
                fontWeight={600}
                color="#333333"
                style={{ margin: 0 }}
              />
            ) : null}
          </Box>

          <RelatedPost
            related={post.related}
            id={post.id}
            loading={loading}
            limit={QUERY_VARIABLES.LIMIT}
          />
        </Row>
      </Grid>
    </SectionWrapper>
  );
};

export default SinglePost;
