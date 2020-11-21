import gql from 'graphql-tag';

export const UPLOAD_IMAGE = gql`
  mutation UploadImage($image: Upload!) {
    addImage(input: $image) {
      id
      url
    }
  }
`;
