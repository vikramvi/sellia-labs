const admin = require("firebase-admin");
const fs = require("fs");
const serviceAccount = require("./headless-graphql-firebase-config.json");
const dotenv = require("dotenv");

dotenv.config();

let collectionName = "post_segments";

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

let db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

const data = require("./data.json");

function updatePostSegements(collectionName) {
  data &&
    Object.keys(data).forEach((key) => {
      const nestedContent = data[key];

      if (typeof nestedContent === "object") {
        Object.keys(nestedContent).forEach((docTitle) => {
          admin
            .firestore()
            .collection(key)
            .doc(docTitle)
            .set(nestedContent[docTitle])
            .then((res) => {
              console.log("Document successfully written!");
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });
        });
      }
    });
}

updatePostSegements(collectionName);
