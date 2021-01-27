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

const categoryName = "to_sell";

// feature flags
const flagConfig = {
  add_photo: true,
};

function updateCategoryFlags() {
  var usersUpdate = {};
  usersUpdate[`feature`] = flagConfig;

  db.collection("post_segments")
    .doc(categoryName)
    .update(usersUpdate);
}

updateCategoryFlags();
