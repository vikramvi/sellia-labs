import gql from 'graphql-tag';

export const GET_ALL_POST = gql`
  query getAllPost($LIMIT: Int, $page: Int) {
    posts(limit: $LIMIT, page: $page) {
      data {
        id
        slug
        title
        price
        image {
          url
          largeUrl
        }
      }
      total
    }
  }
`;
