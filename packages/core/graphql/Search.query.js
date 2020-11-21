import gql from 'graphql-tag';

export const GET_SEARCH_CATEGORY = gql`
  query getSearchCategory($LIMIT: Int, $page: Int) {
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

export const GET_SEARCH_POST = gql`
  query getSearchPosts($queryVariables: searchParams) {
    searchPosts(searchParams: $queryVariables) {
      data {
        title
        slug
        price
        formattedLocation {
          lat
          lng
          formattedAddress
        }
        distance
        createdAt
        image {
          url
          largeUrl
        }
        isNegotiable
        condition
      }
      total
    }
  }
`;
