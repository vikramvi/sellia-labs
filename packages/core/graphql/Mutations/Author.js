import gql from 'graphql-tag';

export const UPDATE_AUTHOR = gql`
  mutation($author: authorInput!) {
    addAuthor(input: $author) {
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
export const HANDLE_FAV = gql`
  mutation($fav: adFavInput!) {
    handleFav(input: $fav) {
      data {
        id
      }
    }
  }
`;

export const GET_VERIFICATION_CODE = gql`
  mutation GetVerificationCode($mobileNumber: InputMobileNumber!) {
    getVerificationCode(input: $mobileNumber) {
      id
      code
    }
  }
`;

export const VERIFY_CODE = gql`
  mutation VerifyCode($verify: InputVerifyNumber!) {
    verifyCode(input: $verify) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation Login($user: RegisterInput!) {
    login(input: $user) {
      userId
      email
      error
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout($user: RegisterInput!) {
    logout(input: $user) {
      userId
      email
      error
    }
  }
`;

export const REGISTER = gql`
  mutation Register($user: RegisterInput!) {
    register(input: $user) {
      userId
      email
      error
    }
  }
`;
export const RESET_PASS = gql`
  mutation ResetPass($resetPass: ResetPassInput!) {
    resetPass(input: $resetPass) {
      userId
      token
    }
  }
`;

export const FOREGET_PASS_MAIL = gql`
  mutation ForgetPassMail($forgetPassMail: ForgetPassMailInput!) {
    forgetPassMail(input: $forgetPassMail) {
      message
    }
  }
`;
