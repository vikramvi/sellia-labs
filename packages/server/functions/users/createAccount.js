/**
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for t`he specific language governing permissions and
 * limitations under the License.
 */
"use strict";
const functions = require("firebase-functions");
const admin = require("firebase-admin");
// admin.initializeApp({
//   credential: admin.credential.cert(require("../../config")),
//   databaseURL: process.env.FIREBASE_DATABASE_URL,
// });
const mkdirp = require("mkdirp-promise");
const spawn = require("child-process-promise").spawn;
const path = require("path");
const os = require("os");
const fs = require("fs");

// Max height and width of the thumbnail in pixels.
const THUMB_MAX_HEIGHT = 360;
const THUMB_MAX_WIDTH = 420;
// Thumbnail prefix added to file names.
const THUMB_PREFIX = "thumb_";

import { createAuthUser } from "./createAuthUser";
import { createWaitListUser } from "./createWaitListUser";
import { validateAccount } from "./validateAccount";
const cors = require("cors")({ origin: true });

export const createAccount = functions.https.onRequest((req, res) => {
  // response.send("sign up worked");

  return cors(req, res, async () => {
    const { newUserInfo } = req.body;

    console.log("req.body ->", req.body);
    console.log("newUserInfo ->", newUserInfo);

    // 1) validate email domain
    const isCompanyRegistered = await validateAccount(newUserInfo);

    if (isCompanyRegistered) {
      // 2) create user for allowed user
      const { user, error } = await createAuthUser(newUserInfo);

      return res.status(200).json({
        success: user ? true : false,
        isCompanyRegistered: true,
        user: user,
        error: error && error.message,
      });
    } else {
      // 3) add user to waitlist
      await createWaitListUser(newUserInfo);
      return res.status(200).json({
        success: true,
        isCompanyRegistered: false,
      });
    }
  });
});
