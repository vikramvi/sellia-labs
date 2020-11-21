import { firebaseAuth } from './init';
import { setFirebaseCookie } from './session';

/**
 * Firebase Authentication helper functions
 */
class AuthHelper {
  constructor() {}

  signUp = async (provider, email, password) => {
    try {
      switch (provider) {
        case 'password':
          return new Promise((resolve, reject) => {
            firebaseAuth()
              .createUserWithEmailAndPassword(email, password)
              .then(result => {
                resolve(result);
              })
              .catch(error => {
                resolve({ error });
              });
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  forgetPass = async email => {
    return new Promise((resolve, reject) => {
      firebaseAuth()
        .sendPasswordResetEmail(email)
        .then(result => {
          resolve(true);
        })
        .catch(error => {
          resolve({ error });
        });
    });
  };

  reauthenticate = async currentPassword => {
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
              .catch(error => {
                resolve({ error });
              });
          })
          .catch(error => {
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
        case 'password':
          return new Promise((resolve, reject) => {
            firebaseAuth()
              .signInWithEmailAndPassword(email, password)
              .then(result => {
                resolve(result);
              })
              .catch(error => {
                resolve({ error });
              });
          });
        case 'google':
          var authProvider = new firebaseAuth.GoogleAuthProvider();
          return firebaseAuth().signInWithPopup(authProvider);
        case 'facebook':
          var authProvider = new firebaseAuth.FacebookAuthProvider();
          return firebaseAuth().signInWithPopup(authProvider);
        case 'twitter':
          var authProvider = new firebaseAuth.TwitterAuthProvider();
          return firebaseAuth().signInWithPopup(authProvider);
        case 'phone':
          let appVerifier;
          appVerifier = window.recaptchaVerifier;
          return new Promise((resolve, reject) => {
            firebaseAuth()
              .signInWithPhoneNumber(phoneNumber, appVerifier)
              .then(result => {
                resolve(result);
              })
              .catch(error => {
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
        .then(result => {
          resolve(result.user);
        })
        .catch(function(error) {
          resolve({ error });
        });
    });
  };

  getToken = async User => {
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
        setFirebaseCookie('id_token', idToken);
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
        authUser => {
          resolve(authUser);
          unsubscribe();
        },

        error => reject(error)
      );
    });
  };

  getCurrentUser = async () => {
    return firebaseAuth().currentUser;
  };
}

export default new AuthHelper();
