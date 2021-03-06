const admin = require('firebase-admin');
const fs = require('fs');
const serviceAccount = require('../../headless-graphql-firebase-config.json');
const dotenv = require('dotenv');
dotenv.config();

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

let db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

const configData = [
  {
    title: 'Title',
    type: 'textField',
    key: 'title',
  },
  {
    type: 'textDescription',
    title: 'Description',
    key: 'content',
  },
];

function updateCategorySection() {
  var usersUpdate = {};
  usersUpdate[`sections`] = configData;

  db.collection('post_segments')
    .doc('for_recommendation')
    .update(usersUpdate);
}

updateCategorySection();

// feature flags
const flagConfig = {
  add_photo: false,
};

function updateCategoryFlags() {
  var usersUpdate = {};
  usersUpdate[`feature`] = flagConfig;

  db.collection('post_segments')
    .doc('for_recommendation')
    .update(usersUpdate);
}

// updateCategoryFlags();
