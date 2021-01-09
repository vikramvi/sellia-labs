import { async } from "regenerator-runtime";
import { firebaseAuth } from "./init";
import { setFirebaseCookie } from "./session";
import firebase from "firebase/app";
import axios from "axios";
axios.defaults.baseURL = "https://us-central1-sellia-42377.cloudfunctions.net";

/**
 * Firebase Authentication helper functions
 */
class AuthHelper {
  constructor() {}

  signupWithEmail = async (provider, name, email, password) => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const newUserInfo = {
        name,
        email,
        password,
      };

      console.log("signupWithEmail ->", newUserInfo);

      const resp = await axios.post("/createAccount", { newUserInfo });

      console.log("return ->", resp.data);

      return resp.data;
    } catch (error) {
      return error;
    }
  };

  // signupWithEmail = async (provider, name, email, password) => {
  //   try {
  //     //create user
  //     const result = await firebaseAuth().createUserWithEmailAndPassword(
  //       email,
  //       password
  //     );

  //     //update profile
  //     await firebaseAuth().currentUser.updateProfile({
  //       displayName: name,
  //     });

  //     // send verfication email
  //     firebaseAuth().currentUser.sendEmailVerification();

  //     return result;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  signUp = async (provider, name, email, password) => {
    try {
      switch (provider) {
        case "password":
        //   return new Promise((resolve, reject) => {

        //     try {
        //     //create user
        //     const result = await firebaseAuth().createUserWithEmailAndPassword(email, password)

        //      //update profile
        //      await firebaseAuth().currentUser.updateProfile({
        //       displayName: name
        //     })

        //      // send verfication email
        //      firebaseAuth().currentUser.sendEmailVerification();

        //      resolve(result);
        //   } catch(error) {
        //     reject({ error });
        //   }
        // });
      }
    } catch (error) {
      console.log(error);
    }
  };

  forgetPass = async (email) => {
    return new Promise((resolve, reject) => {
      firebaseAuth()
        .sendPasswordResetEmail(email)
        .then((result) => {
          resolve(true);
        })
        .catch((error) => {
          resolve({ error });
        });
    });
  };

  reauthenticate = async (currentPassword) => {
    var user = firebaseAuth().currentUser;
    var cred = firebaseAuth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return user.reauthenticateWithCredential(cred);
  };

  changePassword = async (currentPassword, newPassword) =>
    new Promise((resolve, reject) => {
      try {
        this.reauthenticate(currentPassword)
          .then(() => {
            var user = firebaseAuth().currentUser;
            user
              .updatePassword(newPassword)
              .then(() => {
                resolve(true);
              })
              .catch((error) => {
                resolve({ error });
              });
          })
          .catch((error) => {
            resolve({ error });
          });
      } catch (error) {
        resolve({ error });
      }
    });

  login = async (
    provider,
    email = null,
    password = null,
    phoneNumber = null
  ) => {
    try {
      switch (provider) {
        case "password":
          return new Promise((resolve, reject) => {
            firebaseAuth()
              .signInWithEmailAndPassword(email, password)
              .then((result) => {
                console.log("sign in ->", JSON.stringify(result));
                resolve(result);
              })
              .catch((error) => {
                resolve({ error });
              });
          });
        case "google":
          var authProvider = new firebaseAuth.GoogleAuthProvider();
          return firebaseAuth().signInWithPopup(authProvider);
        case "facebook":
          var authProvider = new firebaseAuth.FacebookAuthProvider();
          return firebaseAuth().signInWithPopup(authProvider);
        case "twitter":
          var authProvider = new firebaseAuth.TwitterAuthProvider();
          return firebaseAuth().signInWithPopup(authProvider);
        case "phone":
          let appVerifier;
          appVerifier = window.recaptchaVerifier;
          return new Promise((resolve, reject) => {
            firebaseAuth()
              .signInWithPhoneNumber(phoneNumber, appVerifier)
              .then((result) => {
                resolve(result);
              })
              .catch((error) => {
                resolve({ error });
              });
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  confirmVerification = async (confirmationResult, code) => {
    return new Promise((resolve, reject) => {
      confirmationResult
        .confirm(code)
        .then((result) => {
          resolve(result.user);
        })
        .catch(function(error) {
          resolve({ error });
        });
    });
  };

  getToken = async (User) => {
    try {
      return User.getIdToken();
    } catch (error) {
      console.log(error);
    }
  };

  refreshToken = async () => {
    await firebaseAuth()
      .currentUser.getIdToken(true)
      .then(function(idToken) {
        setFirebaseCookie("id_token", idToken);
      })
      .catch(function(error) {});
  };

  logout = async () => {
    return new Promise((resolve, reject) => {
      try {
        firebaseAuth()
          .signOut()
          .then(() => {
            resolve(true);
          });
      } catch (error) {
        reject(false);
      }
    });
  };

  isAuthenticated = async () => {
    return new Promise((resolve, reject) => {
      const unsubscribe = firebaseAuth().onAuthStateChanged(
        (authUser) => {
          resolve(authUser);
          unsubscribe();
        },

        (error) => reject(error)
      );
    });
  };

  getCurrentUser = async () => {
    return firebaseAuth().currentUser;
  };
}

export default new AuthHelper();
