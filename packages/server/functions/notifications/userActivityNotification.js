import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { sendEmail } from "../../helper/sendEmail";

export const userActivityNotification = functions.firestore
  .document("notifications/user_activity/{userId}/{notificationId}")
  .onCreate((snap, context) => {
    console.log("userActivityNotification IN");

    const newValue = snap.data();
    console.log("event params ->", newValue);

    return sendEmail({
      to: newValue.email,
      from: "noreply@sellia.com",
      subject: newValue.subject,
      message:
        newValue.body +
        '<br><br><br><p><a href="https://sellia-42377.web.app/">Visit Sellia</a><p>',
    });
  });
