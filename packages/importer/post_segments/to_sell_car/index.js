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
    key: 'choose_category',
    list: [
      {
        id: '0',
        text: 'Furniture',
      },
      {
        id: 1,
        text: 'Appliances',
      },
      {
        id: 2,
        text: 'Automotive',
      },
      {
        id: 3,
        text: 'Baby & Kids',
      },
      {
        id: 4,
        text: 'Bicycles',
      },
      {
        id: 5,
        text: 'Garden',
      },
    ],
    title: 'Choose category',
    type: 'radioSelectionList',
  },
];

function updateCategoryList_toSell() {
  var usersUpdate = {};
  usersUpdate[`sections`] = configData;

  db.collection('post_segments')
    .doc('to_sell')
    .update(usersUpdate);
}

updateCategoryList_toSell();
