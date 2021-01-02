import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";

import { config } from "../firebase.config";

firebase.initializeApp(config);

//emulator
firebase.functions().useFunctionsEmulator("http://localhost:5000");
// firebase.firestore().useFunctionsEmulator("http://localhost:5000");

const db = firebase.firestore();
const storage = firebase.storage();
const firebaseAuth = firebase.auth;

// db.settings({
//   timestampsInSnapshots: true,
// });

export { db, storage, firebaseAuth };
