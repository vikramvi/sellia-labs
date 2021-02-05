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

// const configData = [
//   {
//     key: "choose_category",
//     list: [
//       {
//         id: "0",
//         text: "Furniture",
//       },
//       {
//         id: 1,
//         text: "Appliances",
//       },
//       {
//         id: 2,
//         text: "Automotive",
//       },
//       {
//         id: 3,
//         text: "Baby & Kids",
//       },
//       {
//         id: 4,
//         text: "Bicycles",
//       },
//       {
//         id: 5,
//         text: "Garden",
//       },
//     ],
//     title: "Choose category",
//     type: "radioSelectionList",
//   },
// ];

const configData = [
  {
    key: "brand",
    list: [
      {
        id: "0",
        text: "Toyota",
      },
      {
        id: "1",
        text: "Tesla",
      },
      {
        id: 2,
        text: "Honda",
      },
      {
        id: 3,
        text: "Hyundai",
      },
      {
        id: 4,
        text: "Kia",
      },
      {
        id: 5,
        text: "Jeep",
      },
      {
        id: 6,
        text: "Ford",
      },
      {
        id: 7,
        text: "Porche",
      },
      {
        id: 8,
        text: "Chevrolet",
      },
      {
        id: 9,
        text: "Genesis",
      },
      {
        id: 10,
        text: "Chrysler",
      },
      {
        id: 11,
        text: "Dodge",
      },
      {
        id: 0,
        text: "Other",
      },
    ],
    title: "Choose Brand",
    type: "radioSelectionList",
  },
  {
    key: "title",
    title: "Title / Make Model Year",
    type: "textField",
  },
  {
    key: "formattedLocation",
    title: "City",
    type: "location",
  },
  {
    list: [
      {
        key: "price",
        title: "Asking Price",
        type: "currency",
      },
      {
        key: "originalPrice",
        title: "Original Price",
        type: "currency",
      },
    ],
    title: "Price",
    type: "rowContainer",
  },
  {
    id: "",
    key: "content",
    title: "Description",
    type: "textDescription",
  },
  {
    list: [
      {
        id: 1,
        key: "mileage",
        title: "Mileage",
        type: "textBox",
      },
    ],
    type: "rowContainer",
  },
];

function updateCategoryList_toSell() {
  var usersUpdate = {};
  usersUpdate[`sections`] = configData;

  db.collection("post_segments")
    .doc("to_sell_car")
    .update(usersUpdate);
}

updateCategoryList_toSell();
