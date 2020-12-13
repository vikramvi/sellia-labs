import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import sendEmail from "../../helper/sendEmail";

export const sendEmailVerification = functions.auth
  .user()
  .onCreate(async (user, context) => {
    const email = user.email;
    const link = await admin.auth().generateEmailVerificationLink(email, {
      url: "https://sellia-42377.web.app/signup-verification",
    });

    // sendEmail() is a helper defined elsewhere that puts the link into a custom
    // email template, and sends it out using SendGrid.
    return await sendEmail(email, link);
  });
