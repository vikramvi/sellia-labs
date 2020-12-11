import { gql, useMutation } from "@apollo/client";

const CREATE_ACCOUNT = gql`
  mutation CreateAccount($type: String!) {
    createAccount(type: $type) {
      id
      type
    }
  }
`;
