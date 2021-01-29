const admin = require("firebase-admin");
const fs = require("fs");
const serviceAccount = require("../../headless-graphql-firebase-config.json");
const dotenv = require("dotenv");
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
    title: "Title",
    type: "textField",
    key: "title",
  },
  {
    title: "City",
    type: "textBox",
    key: "city",
  },
  {
    list: [
      {
        title: "Price",
        type: "currency",
        key: "price",
      },
      {
        title: "Original Price",
        type: "currency",
        key: "originalPrice",
      },
    ],
    title: "Price",
    type: "rowContainer",
  },
  {
    list: [
      {
        id: "0",
        text: "Furniture",
      },
      {
        id: 1,
        text: "Appliances",
      },
      {
        id: 2,
        text: "Automotive",
      },
      {
        id: 3,
        text: "Baby & Kids",
      },
      {
        id: 4,
        text: "Bicycles",
      },
      {
        id: 5,
        text: "Garden",
      },
      {
        id: 6,
        text: "Electronics",
      },
    ],
    title: "Choose category",
    key: "category",
    type: "radioSelectionList",
  },
  {
    list: [
      {
        id: 0,
        text: "New",
      },
      {
        id: 1,
        text: "Used",
      },
      {
        id: 2,
        text: "Refurbished",
      },
    ],
    title: "Condition",
    type: "selectionList",
    key: "condition",
  },
  {
    type: "textDescription",
    title: "Description",
    key: "content",
  },
];

function updateCategoryList_toSell() {
  var usersUpdate = {};
  usersUpdate[`sections`] = configData;

  db.collection("post_segments")
    .doc("to_sell")
    .update(usersUpdate);
}

updateCategoryList_toSell();
