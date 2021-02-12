import gql from "graphql-tag";

export const GET_CATEGORY_POST = gql`
  query getCategoryPost($id: ID, $SLUG: String, $LIMIT: Int, $page: Int) {
    category(id: $id, slug: $SLUG) {
      id
      name
      slug
      createdAt
      author {
        name
        username
        image {
          url
          largeUrl
        }
      }
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
  }
`;
