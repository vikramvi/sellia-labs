import * as admin from "firebase-admin";
import { async } from "regenerator-runtime";

export const validateAccount = async (newUserInfo) => {
  const auth = admin.auth();
  const store = admin.firestore();

  const { email } = newUserInfo;

  var emailDomain = email.substring(email.lastIndexOf("@") + 1);

  console.log("emailDomain ->", emailDomain);

  const doc = await store
    .collection("sellia-admin")
    .doc("companies")
    .collection("company_info")
    .where("email_domain", "==", emailDomain)
    .get();

  if (doc.empty) {
    console.log("No such document!");
    return false;
  } else {
    return true;
  }
};
