require("@babel/polyfill");
require("dotenv").config();

// import app from './functions/app';
import generateThumbnail from "./functions/generateThumb";
import { createAccount } from "./functions/users/createAccount";
import { newUserSignUp, userDeleted } from "./functions/users/usersAuthHelper";
import { userActivityNotification } from "./functions/notifications/userActivityNotification";
import { userActivityNotificationListner } from "./functions/notifications/userActivityNotificationListner";

import api from "./functions/api";

const functions = require("firebase-functions");
const next = require("next");

// exports.next = functions.https.onRequest(app);

var dev = process.env.NODE_ENV !== "production";
var app = next({
  dev,
  conf: {
    distDir: "next",
    publicRuntimeConfig: {
      staticFolder: "../../public",
    },
  },
});
var handle = app.getRequestHandler();

exports.api = functions.https.onRequest(api);
exports.generateThumbnail = generateThumbnail;
exports.newUserSignUp = newUserSignUp;
exports.userDeleted = userDeleted;
exports.createAccount = createAccount;
exports.userActivityNotification = userActivityNotification;
exports.userActivityNotificationListner = userActivityNotificationListner;

exports.next = functions.https.onRequest((req, res) => {
  console.log("File: " + req.originalUrl); // log the page.js file that is being requested
  return app.prepare().then(() => handle(req, res));
});
