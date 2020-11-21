import gql from 'graphql-tag';

export const GET_AUTHOR = gql`
  query GetAuthor($id: ID!) {
    author(id: $id) {
      id
      name
      address
      website
      email
      mobile {
        number
      }
      username
      image {
        url
        largeUrl
      }
    }
  }
`;

export const GET_AUTHOR_FAV = gql`
  query GetAuthor($id: ID) {
    author(id: $id) {
      name
      favourite {
        data {
          id
        }
      }
    }
  }
`;
