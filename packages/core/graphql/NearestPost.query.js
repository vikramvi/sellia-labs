import gql from 'graphql-tag';

export const GET_NEAREST_POST = gql`
  query getNearestPost($LIMIT: Int, $page: Int, $location: locationInput) {
    nearest(limit: $LIMIT, page: $page, location: $location) {
      data {
        id
        slug
        title
        price
        image {
          url
          largeUrl
        }
        gallery {
          url
          largeUrl
        }
      }
      total
    }
  }
`;
