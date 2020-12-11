import * as admin from "firebase-admin";

import { async } from "regenerator-runtime";

export const createWaitListUser = async (newUserInfo) => {
  const store = admin.firestore();
  const { email } = newUserInfo;
  const createdAt = Date.now();

  const waitListUser = {
    email,
    createdAt,
  };

  return store
    .collection("sellia-admin")
    .doc("waitlist")
    .collection("user_info")
    .add(waitListUser);
};
