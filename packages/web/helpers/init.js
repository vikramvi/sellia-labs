import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/database";

import { config } from "./firebase.config";

// https://github.com/zeit/next.js/issues/1999#issuecomment-302244429
// For stopping reinitialization
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.firestore();
const storage = firebase.storage();
const firebaseAuth = firebase.auth;
const chatdb = firebase.database();
const firebaseTimeStamp = firebase.firestore.FieldValue.serverTimestamp();

export { db, storage, firebaseAuth, chatdb, firebaseTimeStamp };
