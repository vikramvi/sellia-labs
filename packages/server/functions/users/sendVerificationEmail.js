import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { sendEmail } from "../../helper/sendEmail";

export const sendEmailVerification = functions.auth
  .user()
  .onCreate(async (user, context) => {
    console.log("sendEmailVerification starts");
    const email = user.email;
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
