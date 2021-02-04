import gql from "graphql-tag";

export const GET_ALL_POST = gql`
  query getAllPost($LIMIT: Int, $page: Int) {
    posts(limit: $LIMIT, page: $page) {
      data {
        id
        slug
        status
        title
        content
        createdAt
        price
        originalPrice
        belongsTo
        condition
        category
        categories {
          id
          slug
          name
        }
        author {
          name
          username
          image {
            url
            largeUrl
          }
        }
        image {
          url
          largeUrl
        }
      }
      total
    }
  }
`;
