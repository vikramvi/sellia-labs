import gql from 'graphql-tag';

const AuthorPostsFragment = gql`
  fragment AuthorPostsQuery on Post {
    id
    slug
    image {
      url
      largeUrl
    }
    title
    price
  }
`;

export const GET_PROFILE_INFO = gql`
  query Author($USERNAME: ID!, $LIMIT: Int) {
    author(id: $USERNAME) {
      id
      name
      username
      address
      mobile {
        number
      }
      website
      image {
        url
        largeUrl
      }
      posts(limit: $LIMIT) {
        total
      }
      favourite(limit: $LIMIT) {
        total
      }
      draft(limit: $LIMIT) {
        total
      }
    }
  }
`;
export const GET_AUTHOR_INFO = gql`
  query Author($USERNAME: ID!) {
    author(id: $USERNAME) {
      id
      name
      image {
        url
        largeUrl
      }
    }
  }
`;

export const GET_PUBLISHED_POST = gql`
  query Author($USERNAME: ID!, $LIMIT: Int, $page: Int) {
    author(id: $USERNAME) {
      id
      username
      posts(limit: $LIMIT, page: $page) {
        data {
          ...AuthorPostsQuery
        }
        total
      }
    }
  }
  ${AuthorPostsFragment}
`;

export const GET_FAVOURITE_POST = gql`
  query Author($USERNAME: ID!, $LIMIT: Int, $page: Int) {
    author(id: $USERNAME) {
      id
      favourite(limit: $LIMIT, page: $page) {
        data {
          ...AuthorPostsQuery
        }
        total
      }
    }
  }
  ${AuthorPostsFragment}
`;

export const GET_DRAFT_POST = gql`
  query Author($USERNAME: ID!, $LIMIT: Int, $page: Int) {
    author(id: $USERNAME) {
      id
      draft(limit: $LIMIT, page: $page) {
        data {
          ...AuthorPostsQuery
        }
        total
      }
    }
  }
  ${AuthorPostsFragment}
`;
