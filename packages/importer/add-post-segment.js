const admin = require('firebase-admin');
const fs = require('fs');
const serviceAccount = require('./headless-graphql-firebase-config.json');
const dotenv = require('dotenv');

dotenv.config();

let collectionName = 'post_segments';

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

let db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

const data = require('./data.json');

function updatePostSegements(collectionName) {
  data &&
    Object.keys(data).forEach(key => {
      const nestedContent = data[key];

      if (typeof nestedContent === 'object') {
        Object.keys(nestedContent).forEach(docTitle => {
          admin
            .firestore()
            .collection(key)
            .doc(docTitle)
            .set(nestedContent[docTitle])
            .then(res => {
              console.log('Document successfully written!');
            })
            .catch(error => {
              console.error('Error writing document: ', error);
            });
        });
      }
    });
}

// updatePostSegements(collectionName);

function updateCategoryList_toSell() {
  var usersUpdate = {};
  usersUpdate[`sections`] = [
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
      ],
      title: 'Choose category',
      type: 'radioSelectionList',
    },
  ];

  db.collection('post_segments')
    .doc('to_sell')
    .update(usersUpdate);
}

updateCategoryList_toSell();
