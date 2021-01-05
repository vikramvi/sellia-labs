import * as admin from "firebase-admin";
import * as functions from "firebase-functions";

export const userActivityNotificationListner = functions.firestore
  .document("user_chats/{userId}/chats/{chatId}")
  .onCreate((snap, context) => {
    console.log("userActivityNotificationListner user_chats IN");
    console.log("event snap ->", JSON.stringify(snap));
    console.log("event context ->", JSON.stringify(context));

    const userId = context.params.userId;
    const newValue = snap.data();

    //check user is not seller
    if (userId == newValue.seller.id) {
      // do nothing
      return;
    }

    const toUser = admin
      .firestore()
      .collection("users")
      .doc(newValue.seller.id)
      .get();

    return Promise.all([toUser]).then((result) => {
      const toUserEmail = result[0].data().email;

      //opt for notification
      var notificationObject = {
        type: "user_activity",
        subject: "Buyer is interested in you listing",
        email: toUserEmail,
        body: `<h1>Your Listing:</h1>
          <p> <b>Name: </b>${newValue.title} </p>`,
      };

      return admin
        .firestore()
        .collection("notifications/user_activity/" + userId)
        .add(notificationObject);
    });
  });

//Reference

// const functions = require('firebase-functions');
// const admin = require('firebase-admin');
// admin.initializeApp(functions.config().firebase);

// exports.sendNotification = functions.firestore.document("notifications/{userEmail}/userNotifications/{notificationId}").onWrite(event => {
// 	const userEmail = event.params.userEmail;
// 	const notificationId = event.params.notificationId;

// 	return admin.firestore().collection("notifications").doc(userEmail).collection("userNotifications").doc(notificationId).get().then(queryResult => {
// 		const senderUserEmail = queryResult.data().senderUserEmail;
// 		const notificationMessage = queryResult.data().notificationMessage;

// 		const fromUser = admin.firestore().collection("users").doc(senderUserEmail).get();
// 		const toUser = admin.firestore().collection("users").doc(userEmail).get();

// 		return Promise.all([fromUser, toUser]).then(result => {
// 			const fromUserName = result[0].data().userName;
// 			const toUserName = result[1].data().userName;
// 			const tokenId = result[1].data().tokenId;

// 			const notificationContent = {
// 				notification: {
// 					title: fromUserName + " is shopping",
// 					body: notificationMessage,
// 					icon: "default"
// 				}
// 			};

// 			return admin.messaging().sendToDevice(tokenId, notificationContent).then(result => {
// 				console.log("Notification sent!");
// 				//admin.firestore().collection("notifications").doc(userEmail).collection("userNotifications").doc(notificationId).delete();
// 			});
// 		});
// 	});
// });
