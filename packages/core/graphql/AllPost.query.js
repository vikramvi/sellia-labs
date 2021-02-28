import gql from "graphql-tag";

export const GET_ALL_POST = gql`
  query getAllPost($LIMIT: Int, $page: Int) {
    posts(limit: $LIMIT, page: $page) {
      data {
        id
        slug
        authorId
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
        gallery {
          url
          largeUrl
        }

        formattedLocation {
          formattedAddress
        }

        author {
          name
          username
          company {
            id
            name
          }
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
