import gql from "graphql-tag";

export const ADD_POST = gql`
  mutation AddPost($post: postInput!) {
    addPost(input: $post) {
      id
      createdAt
      title
      brand
      category
      content
      contactNumber
      amenities
      status
      city
      belongsTo
      slug
      price
      originalPrice
      location {
        lat
        lng
        formattedAddress
      }
      categories {
        id
      }
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      isNegotiable
      condition
    }
  }
`;

export const UPDATE_POST_STATUS = gql`
  mutation UpdatePostStatus($post: postUpdateStatusInput!) {
    updatePostStatus(input: $post) {
      id
      createdAt
      title
      content
      contactNumber
      status
      slug
      price
      location {
        lat
        lng
        formattedAddress
      }
      categories {
        id
      }
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      isNegotiable
      condition
    }
  }
`;
