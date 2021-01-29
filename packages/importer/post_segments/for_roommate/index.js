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
  },

  {
    list: [
      {
        title: "Address",
        type: "textBox",
      },
      {
        title: "Zip Code",
        type: "textBox",
      },
    ],
    title: "",
    type: "rowContainer",
  },
  {
    list: [
      {
        title: "Beds",
        type: "textBox",
      },
      {
        title: "Baths",
        type: "textBox",
      },
      {
        title: "No. of Roommates",
        type: "textBox",
      },
    ],
    title: "",
    type: "rowContainer",
  },
  {
    title: "Budget",
    type: "currency",
  },
  {
    list: [
      {
        title: "Type of House",
        list: [
          {
            id: 0,
            text: "Entire Flat",
          },
          {
            id: 1,
            text: "Room",
          },
          {
            id: 2,
            text: "Shared Apartment",
          },
          {
            id: 3,
            text: "Dormitory",
          },
        ],
        type: "selectionList",
        isMulti: false,
      },
      {
        title: "Amenities",
        type: "selectionList",
        isMulti: true,
        list: [
          {
            id: 0,
            text: "Laundry",
          },
          {
            id: 1,
            text: "Internet",
          },
          {
            id: 2,
            text: "Car Parking",
          },
          {
            id: 3,
            text: "HVAC",
          },
        ],
      },
    ],
    type: "rowContainer",
  },
  {
    type: "textDescription",
    title: "Description",
  },
];
function updateCategoryList_toSell() {
  var usersUpdate = {};
  usersUpdate[`sections`] = configData;

  db.collection("post_segments")
    .doc("for_roommate")
    .update(usersUpdate);
}

updateCategoryList_toSell();

// feature flags
const flagConfig = {
  add_photo: true,
};

function updateCategoryFlags() {
  var usersUpdate = {};
  usersUpdate[`feature`] = flagConfig;

  db.collection("post_segments")
    .doc("for_roommate")
    .update(usersUpdate);
}

// updateCategoryFlags();
