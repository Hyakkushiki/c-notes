// var admin = require("firebase-admin");

// var serviceAccount = require("path/to/serviceAccountKey.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};
const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// const FirebaseCredentials = {
//   apiKey: 'gg', //process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
//   authDomain: 'gg', //process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: 'gg', //process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: 'gg', //process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: 'gg', //process.env.NEXT_PUBLIC_FIREBASE_MESSING_SENDER_ID,
//   appId: 'gg', //process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//   measurementId: 'gg', //process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
// };

// Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseApp = initializeApp(FirebaseCredentials);

export const firebaseAuth = getAuth(firebaseApp);
// export const analytics = getAnalytics(app);
export const firebaseDB = getFirestore(firebaseApp);

// setPersistence(firebaseAuth, browserSessionPersistence)
//   .then(() => {
//     console.log("Session persistence enabled");
//   })
//   .catch((error) => {
//     console.error("Error enabling session persistence:", error);
//   });
