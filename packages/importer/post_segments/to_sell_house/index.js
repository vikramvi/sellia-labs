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
  },
  {
    list: [
      {
        title: 'Beds',
        type: 'textBox',
      },
      {
        title: 'Baths',
        type: 'textBox',
      },
      {
        title: 'Lot Size',
        type: 'textBox',
      },
      {
        title: 'Sq. Ft.',
        type: 'textBox',
      },
    ],
    title: '',
    type: 'rowContainer',
  },
  {
    list: [
      {
        title: 'Price',
        type: 'currency',
      },
    ],
    title: 'Price',
    type: 'rowContainer',
  },
  {
    type: 'textBox',
    title: 'Zip Code',
  },
  {
    type: 'textDescription',
    title: 'Description',
  },
];

function updateCategoryList_toSell() {
  var usersUpdate = {};
  usersUpdate[`sections`] = configData;

  db.collection('post_segments')
    .doc('to_sell_house')
    .update(usersUpdate);
}

updateCategoryList_toSell();
