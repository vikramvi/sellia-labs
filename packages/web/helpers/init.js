import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/database";
import "firebase/functions";

import { config } from "./firebase.config";

// https://github.com/zeit/next.js/issues/1999#issuecomment-302244429
// For stopping reinitialization
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

//emulator
firebase.functions().useFunctionsEmulator("http://localhost:5000");
// firebase.firestore().settings({
//   host: "localhost:8081",
// });

var db = firebase.firestore();
// if (location.hostname === "localhost") {
// db.useEmulator("localhost", 8080);
// }
const storage = firebase.storage();
const firebaseAuth = firebase.auth;
const chatdb = firebase.database();
const firebaseFieldValue = firebase.firestore.FieldValue;

export { db, storage, firebaseAuth, chatdb, firebaseFieldValue };
