import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';
import { config } from '../firebase.config';

firebase.initializeApp(config);

const db = firebase.firestore();
const storage = firebase.storage();
const firebaseAuth = firebase.auth;

// db.settings({
//   timestampsInSnapshots: true,
// });

export { db, storage, firebaseAuth };
