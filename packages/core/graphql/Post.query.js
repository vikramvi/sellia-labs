import gql from "graphql-tag";

export const GET_POST = gql`
  query getPost($slug: String, $lat: Float, $lng: Float) {
    post(slug: $slug, lat: $lat, lng: $lng) {
      id
      title
      status
      content
      price
      city
      authorId
      slug
      contactNumber
      condition
      isNegotiable
      createdAt
      distance
      belongsTo
      brand
      category
      mileage
      miles
      originalPrice
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
      gallery {
        url
        largeUrl
      }
      favouritedBy
      location {
        lat
        lng
        formattedAddress
      }
      formattedLocation {
        lat
        lng
        formattedAddress
      }
      categories {
        id
        slug
        name
      }
      related(limit: 4) {
        id
        title
        slug
        price
        image {
          url
          largeUrl
        }
      }
    }
  }
`;

export const GET_POST_FOR_EDIT = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      content
      price
      slug
      category
      status
      condition
      isNegotiable
      authorId
      contactNumber
      image {
        url
        largeUrl
      }
      gallery {
        url
        largeUrl
      }
      formattedLocation {
        lat
        lng
        formattedAddress
      }
      categories {
        id
        slug
        name
        value
        label
      }
    }
  }
`;
