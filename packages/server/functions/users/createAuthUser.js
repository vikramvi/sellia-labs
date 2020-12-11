import * as admin from "firebase-admin";
import { async } from "regenerator-runtime";

export const createAuthUser = async (newUserInfo) => {
  const auth = admin.auth();
  const { email, password } = newUserInfo;

  const newUser = await auth.createUser({
    email: email,
    password,
  });

  return newUserInfo.uid;
};
