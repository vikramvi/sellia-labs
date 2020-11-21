import gql from 'graphql-tag';

export const GET_CATEGORIES = gql`
  query getCategories($LIMIT: Int, $page: Int) {
    categories(limit: $LIMIT, page: $page) {
      data {
        id
        slug
        name
        image {
          url
        }
        posts {
          total
        }
      }
      total
    }
  }
`;

export const GET_CATEGORIES_FOR_DROPDOWN = gql`
  query GetCategories($limit: Int!, $string: String) {
    categories(limit: $limit, string: $string) {
      data {
        id
        slug
        name
      }
      total
    }
  }
`;
