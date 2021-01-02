import * as admin from "firebase-admin";
import * as functions from "firebase-functions";
import { sendEmail } from "../../helper/sendEmail";

export const userActivityNotification = functions.firestore
  .document("notifications/{userId}/user_activity/{notificationId}")
  .onCreate((snap, context) => {
    console.log("userActivityNotification IN");
    const newValue = snap.data();

    console.log("event params ->", newValue);

    return sendEmail({
      to: "bnshah.dev@gmail.com",
      from: "noreply@sellia.com",
      subject: "Sellia Email ",
      message: `Click this link to verify your email: ${newValue}`,
    });
  });
