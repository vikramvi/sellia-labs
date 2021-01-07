import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { sendEmail } from "../../helper/sendEmail";

export const newUserSignUp = functions.auth
  .user()
  .onCreate(async (user, context) => {
    console.log("sendEmailVerification starts");
    const email = user.email;

    await admin
      .firestore()
      .collection("users")
      .doc(user.uid)
      .set({
        email: email,
        id: user.uid,
        name: user.displayName,
      });

    const link = await admin.auth().generateEmailVerificationLink(email, {
      url: "https://sellia-42377.web.app/signup-verification",
    });

    return sendEmail({
      to: email,
      from: "noreply@sellia.com",
      subject: "Sellia Email Verification",
      message: `Click this link to verify your email: ${link}`,
    });
  });

export const userDeleted = functions.auth
  .user()
  .onDelete(async (user, context) => {
    console.log("userDeleted starts");

    const doc = admin
      .firestore()
      .collection("users")
      .doc(user.uid);

    return doc.delete();
  });
