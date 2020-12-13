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
// firebase.functions().useFunctionsEmulator("http://localhost:5001");

const db = firebase.firestore();
const storage = firebase.storage();
const firebaseAuth = firebase.auth;
const chatdb = firebase.database();
const firebaseFieldValue = firebase.firestore.FieldValue;

export { db, storage, firebaseAuth, chatdb, firebaseFieldValue };
