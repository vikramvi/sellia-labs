import * as admin from "firebase-admin";
import { async } from "regenerator-runtime";

export const createAuthUser = async (newUserInfo) => {
  const auth = admin.auth();
  const { email, password, name } = newUserInfo;

  console.log("createAuthUser newUserInfo ->", newUserInfo);

  try {
    //create user
    const newUser = await auth.createUser({
      email: email,
      password,
      displayName: name,
    });

    return { user: newUser, error: null };
  } catch (error) {
    return { user: null, error: error };
  }
};
