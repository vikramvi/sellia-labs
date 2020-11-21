import gql from 'graphql-tag';

export const GET_CATEGORY_POST = gql`
  query getCategoryPost($id: ID, $SLUG: String, $LIMIT: Int, $page: Int) {
    category(id: $id, slug: $SLUG) {
      id
      name
      slug
      posts(limit: $LIMIT, page: $page) {
        data {
          id
          title
          price
          slug
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
