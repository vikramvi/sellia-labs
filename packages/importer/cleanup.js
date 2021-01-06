const admin = require("firebase-admin");
const fs = require("fs");
const serviceAccount = require("./headless-graphql-firebase-config.json");
const dotenv = require("dotenv");

dotenv.config();

let collectionName = process.argv[2];
let subCollection = process.argv[3];

// You should replace databaseURL with your own
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

let db = admin.firestore();
db.settings({ timestampsInSnapshots: true });

let data = {};
data[collectionName] = {};

function deleteCollection(collectionName) {
  console.log("cleaning up " + collectionName);

  // Get a new write batch
  var batch = db.batch();

  db.collection(collectionName)
    .listDocuments()
    .then((val) => {
      val.map((val) => {
        batch.delete(val);
      });

      batch.commit();
    });
}

deleteCollection(collectionName);
