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

const categoryName = "to_rent_house";

const configData = [
  {
    title: "Title",
    type: "textField",
    key: "title",
  },
  {
    list: [
      {
        title: "Beds",
        type: "textBox",
        key: "beds",
      },
      {
        title: "Baths",
        type: "textBox",
        key: "baths",
      },
      {
        title: "Lot Size",
        type: "textBox",
        key: "lotSize",
      },
      {
        title: "Sq. Ft.",
        type: "textBox",
        key: "sqft",
      },
    ],
    title: "",
    type: "rowContainer",
  },
  {
    list: [
      {
        title: "Price",
        type: "currency",
        key: "currency",
      },
    ],
    title: "Price",
    type: "rowContainer",
  },
  {
    type: "textBox",
    title: "Zip Code",
    key: "zip",
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
    .doc(categoryName)
    .update(usersUpdate);
}

updateCategoryList_toSell();
